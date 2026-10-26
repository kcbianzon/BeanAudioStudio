const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let file = req.url.split('?')[0];
  if (file === '/' || !file.includes('.')) file = '/index.html';
  const fp = path.join(__dirname, '..', 'public', file);
  if (fs.existsSync(fp)) {
    const ext = path.extname(fp);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    fs.createReadStream(fp).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(5175, async () => {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const userDataDir = 'C:\\Users\\kc\\AppData\\Local\\Temp\\edge_cdp_profile_' + Date.now();

  const edgeProc = spawn(edgePath, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=320,568',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    'about:blank'
  ], { stdio: 'ignore' });

  async function cdpRequest(method, url) {
    return new Promise((resolve, reject) => {
      const u = new URL(url);
      const req = http.request({
        hostname: u.hostname,
        port: u.port,
        path: u.pathname + u.search,
        method: method
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try { resolve(JSON.parse(data)); } catch { resolve(data); }
        });
      });
      req.on('error', reject);
      req.end();
    });
  }

  const start = Date.now();
  while (Date.now() - start < 8000) {
    try {
      const v = await cdpRequest('GET', 'http://127.0.0.1:9222/json/version');
      if (v && v.Browser) break;
    } catch {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const tabs = await cdpRequest('GET', 'http://127.0.0.1:9222/json/list');
  const tab = tabs[0];
  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const msgId = id++;
      pending.set(msgId, resolve);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      pending.get(data.id)(data.result);
      pending.delete(data.id);
    }
  };

  await new Promise(r => { ws.onopen = r; });

  await send('Network.enable');
  await send('Page.enable');
  await send('Runtime.enable');

  await send('Network.setUserAgentOverride', {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  });

  await send('Emulation.setDeviceMetricsOverride', {
    width: 320,
    height: 568,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send('Emulation.setTouchEmulationEnabled', { enabled: true });

  await send('Page.navigate', { url: 'http://127.0.0.1:5175/#quote' });
  await new Promise(r => setTimeout(r, 2500));

  // Check Step 1
  const check1 = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        innerWidth: window.innerWidth,
        docScrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        overflowingElements: Array.from(document.querySelectorAll('*'))
          .filter(el => {
            const r = el.getBoundingClientRect();
            return r.right > window.innerWidth + 1;
          })
          .map(el => ({
            tag: el.tagName,
            cls: (el.className || '').toString().slice(0, 30),
            right: Math.round(el.getBoundingClientRect().right),
            width: Math.round(el.getBoundingClientRect().width)
          }))
          .slice(0, 10)
      };
    })()`,
    returnByValue: true
  });

  console.log('--- Step 1 ---', JSON.stringify(check1.result.value, null, 2));

  // Step 2
  await send('Runtime.evaluate', { expression: `document.querySelector('[data-quote-next]')?.click()` });
  await new Promise(r => setTimeout(r, 600));

  const check2 = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        innerWidth: window.innerWidth,
        docScrollWidth: document.documentElement.scrollWidth,
        overflowingElements: Array.from(document.querySelectorAll('*'))
          .filter(el => el.getBoundingClientRect().right > window.innerWidth + 1)
          .map(el => ({
            tag: el.tagName,
            cls: (el.className || '').toString().slice(0, 30),
            right: Math.round(el.getBoundingClientRect().right),
            width: Math.round(el.getBoundingClientRect().width)
          }))
          .slice(0, 10)
      };
    })()`,
    returnByValue: true
  });
  console.log('--- Step 2 ---', JSON.stringify(check2.result.value, null, 2));

  const shot2 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/step2_mobile.png', Buffer.from(shot2.data, 'base64'));

  // Step 3
  await send('Runtime.evaluate', { expression: `document.querySelector('[data-quote-next]')?.click()` });
  await new Promise(r => setTimeout(r, 600));

  const check3 = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        innerWidth: window.innerWidth,
        docScrollWidth: document.documentElement.scrollWidth,
        overflowingElements: Array.from(document.querySelectorAll('*'))
          .filter(el => el.getBoundingClientRect().right > window.innerWidth + 1)
          .map(el => ({
            tag: el.tagName,
            cls: (el.className || '').toString().slice(0, 30),
            right: Math.round(el.getBoundingClientRect().right),
            width: Math.round(el.getBoundingClientRect().width)
          }))
          .slice(0, 10)
      };
    })()`,
    returnByValue: true
  });
  console.log('--- Step 3 ---', JSON.stringify(check3.result.value, null, 2));

  const shot3 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/step3_mobile.png', Buffer.from(shot3.data, 'base64'));

  ws.close();
  edgeProc.kill();
  server.close();
  process.exit(0);
});
