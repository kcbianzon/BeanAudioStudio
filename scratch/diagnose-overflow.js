const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(__dirname, '..', 'public', reqPath);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath);
    const mime = ext === '.html' ? 'text/html' : ext === '.css' ? 'text/css' : ext === '.js' ? 'text/javascript' : 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8089, async () => {
  console.log('Server started on 8089');
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const userDataDir = path.join(__dirname, 'edge_user_data');
  
  const edgeProcess = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    '--window-size=320,800',
    'http://localhost:8089/#quote'
  ]);

  // Wait for Edge CDP to be ready
  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const resp = await fetch('http://127.0.0.1:9222/json');
      const list = await resp.json();
      const pageTarget = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl);
      if (pageTarget) {
        wsUrl = pageTarget.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  if (!wsUrl) {
    console.error('Could not get CDP websocket URL');
    edgeProcess.kill();
    server.close();
    return;
  }

  console.log('Connected to CDP at:', wsUrl);
  const ws = new WebSocket(wsUrl);

  let idCounter = 1;
  const pending = new Map();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      pending.get(data.id)(data);
      pending.delete(data.id);
    }
  };

  const send = (method, params = {}) => {
    const id = idCounter++;
    return new Promise((resolve) => {
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  ws.onopen = async () => {
    console.log('WS Open');
    // Evaluate in page helper
    const evaluate = async (fnStr) => {
      const res = await send('Runtime.evaluate', {
        expression: `(${fnStr})()`,
        returnByValue: true
      });
      return res.result?.result?.value;
    };

    // Set iPhone User Agent and Viewport
    await send('Network.setUserAgentOverride', {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
    });
    await send('Emulation.setDeviceMetricsOverride', {
      width: 320,
      height: 800,
      deviceScaleFactor: 2,
      mobile: true,
      screenWidth: 320,
      screenHeight: 800
    });

    // Navigate to #quote
    await send('Page.navigate', { url: 'http://localhost:8089/#quote' });
    await new Promise(r => setTimeout(r, 1500));

    // Wait for quote builder page to render
    for (let i = 0; i < 30; i++) {
      const hasPage = await evaluate(`function() {
        return !!document.querySelector('.q-builder-page');
      }`);
      if (hasPage) break;
      await new Promise(r => setTimeout(r, 100));
    }

    const pageInfo = await evaluate(`function() {
      return {
        href: window.location.href,
        title: document.title,
        bodyLen: document.body.innerHTML.length,
        hasApp: !!document.getElementById('app'),
        appLen: document.getElementById('app') ? document.getElementById('app').innerHTML.length : 0
      };
    }`);
    console.log('Page info:', pageInfo);
    let diag = await evaluate(`function() {
      const vw = window.innerWidth;
      const docW = document.documentElement.scrollWidth;
      const bodyW = document.body.scrollWidth;
      const overflowing = [];
      document.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 1) {
          overflowing.push({
            tag: el.tagName,
            cls: el.className,
            id: el.id,
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
            vw: vw
          });
        }
      });
      return { vw, docW, bodyW, count: overflowing.length, items: overflowing.slice(0, 15) };
    }`);
    console.log(JSON.stringify(diag, null, 2));

    // Now switch to Step 2
    console.log('--- SWITCHING TO STEP 2 ---');
    await evaluate(`function() {
      window.location.hash = '#quote';
      const btn = document.querySelector('[data-quote-step=\"2\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 600));

    diag = await evaluate(`function() {
      const vw = window.innerWidth;
      const docW = document.documentElement.scrollWidth;
      const bodyW = document.body.scrollWidth;
      const overflowing = [];
      document.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 1) {
          overflowing.push({
            tag: el.tagName,
            cls: el.className,
            id: el.id,
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
            vw: vw
          });
        }
      });
      return { vw, docW, bodyW, count: overflowing.length, items: overflowing.slice(0, 20) };
    }`);
    console.log(JSON.stringify(diag, null, 2));

    // Now switch to Step 3
    console.log('--- SWITCHING TO STEP 3 ---');
    await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step=\"3\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 600));

    diag = await evaluate(`function() {
      const vw = window.innerWidth;
      const docW = document.documentElement.scrollWidth;
      const bodyW = document.body.scrollWidth;
      const overflowing = [];
      document.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 1) {
          overflowing.push({
            tag: el.tagName,
            cls: el.className,
            id: el.id,
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
            vw: vw
          });
        }
      });
      return { vw, docW, bodyW, count: overflowing.length, items: overflowing.slice(0, 25) };
    }`);
    console.log(JSON.stringify(diag, null, 2));

    // Also check Calendar specific cells
    const calDiag = await evaluate(`function() {
      const cal = document.querySelector('.q-schedule-card');
      const cells = Array.from(document.querySelectorAll('.q-cal-days-grid .q-new-cal-cell'));
      const calRect = cal ? cal.getBoundingClientRect() : null;
      return {
        calRect: calRect ? { left: Math.round(calRect.left), right: Math.round(calRect.right), width: Math.round(calRect.width) } : null,
        cellsCount: cells.length,
        lastCells: cells.slice(-7).map(c => {
          const r = c.getBoundingClientRect();
          return { text: c.textContent.trim(), left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) };
        })
      };
    }`);
    console.log('Calendar Grid Diag:', JSON.stringify(calDiag, null, 2));

    // Clean up
    ws.close();
    edgeProcess.kill();
    server.close();
    process.exit(0);
  };
});
