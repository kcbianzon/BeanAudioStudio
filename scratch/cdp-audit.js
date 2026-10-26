const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const userDataDir = 'C:\\Users\\kc\\AppData\\Local\\Temp\\edge_cdp_profile_' + Date.now();

async function request(method, url) {
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
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function waitForPort(port, timeoutMs = 8000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await request('GET', `http://127.0.0.1:${port}/json/version`);
      if (res && res.Browser) return res;
    } catch {
      await new Promise(r => setTimeout(r, 200));
    }
  }
  throw new Error('Timeout waiting for Edge CDP port');
}

async function main() {
  if (!fs.existsSync('scratch')) fs.mkdirSync('scratch');

  console.log('Spawning Edge...');
  const edgeProc = spawn(edgePath, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    'about:blank'
  ], { stdio: 'ignore' });

  try {
    await waitForPort(9222);
    console.log('Edge CDP is ready!');

    const tabs = await request('GET', 'http://127.0.0.1:9222/json/list');
    const tab = tabs[0];
    console.log('Tab debugger URL:', tab.webSocketDebuggerUrl);

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

    await new Promise((resolve) => { ws.onopen = resolve; });
    console.log('WebSocket open!');

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 320,
      height: 600,
      deviceScaleFactor: 2,
      mobile: true
    });

    console.log('Navigating to quote page...');
    await send('Page.navigate', { url: 'https://beantownaudiorental.web.app/#quote' });
    await new Promise(r => setTimeout(r, 3000));

    // Audit Step 1
    const res1 = await send('Runtime.evaluate', {
      expression: `(() => {
        const overflows = [];
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > 320.5) {
            overflows.push({
              tag: el.tagName,
              cls: (el.className || '').toString().slice(0, 50),
              right: Math.round(r.right),
              width: Math.round(r.width)
            });
          }
        });
        return {
          step: 1,
          scrollWidth: document.documentElement.scrollWidth,
          overflowCount: overflows.length,
          top10: overflows.slice(0, 10)
        };
      })()`,
      returnByValue: true
    });
    console.log('STEP 1 AUDIT:', JSON.stringify(res1.result.value, null, 2));

    // Next to Step 2
    await send('Runtime.evaluate', { expression: `document.querySelector('[data-quote-next]')?.click()` });
    await new Promise(r => setTimeout(r, 800));

    const res2 = await send('Runtime.evaluate', {
      expression: `(() => {
        const overflows = [];
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > 320.5) {
            overflows.push({
              tag: el.tagName,
              cls: (el.className || '').toString().slice(0, 50),
              right: Math.round(r.right),
              width: Math.round(r.width)
            });
          }
        });
        return {
          step: 2,
          scrollWidth: document.documentElement.scrollWidth,
          overflowCount: overflows.length,
          top10: overflows.slice(0, 10)
        };
      })()`,
      returnByValue: true
    });
    console.log('STEP 2 AUDIT:', JSON.stringify(res2.result.value, null, 2));

    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/live_step2.png', Buffer.from(shot2.data, 'base64'));

    // Next to Step 3
    await send('Runtime.evaluate', { expression: `document.querySelector('[data-quote-next]')?.click()` });
    await new Promise(r => setTimeout(r, 800));

    const res3 = await send('Runtime.evaluate', {
      expression: `(() => {
        const overflows = [];
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > 320.5) {
            overflows.push({
              tag: el.tagName,
              cls: (el.className || '').toString().slice(0, 50),
              right: Math.round(r.right),
              width: Math.round(r.width)
            });
          }
        });
        return {
          step: 3,
          scrollWidth: document.documentElement.scrollWidth,
          overflowCount: overflows.length,
          top10: overflows.slice(0, 10)
        };
      })()`,
      returnByValue: true
    });
    console.log('STEP 3 AUDIT:', JSON.stringify(res3.result.value, null, 2));

    const shot3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/live_step3.png', Buffer.from(shot3.data, 'base64'));

    ws.close();
  } finally {
    edgeProc.kill('SIGKILL');
  }
}

main().catch(console.error);
