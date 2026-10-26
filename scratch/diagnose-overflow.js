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

    // Set localStorage with selected product and reload #quote
    await send('Page.navigate', { url: 'http://localhost:8089/#quote' });
    await new Promise(r => setTimeout(r, 600));

    await evaluate(`function() {
      // In products array:
      const pId = (typeof products !== 'undefined' && products.length > 0) ? products[0].id : 'p-sound-starter';
      localStorage.setItem('beantown-selected-products', JSON.stringify({ [pId]: 2 }));
      location.reload();
    }`);
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

    const treeReport = await evaluate(`function() {
      const sels = ['.page.q-builder-page', '.q-hero', '.q-progress-nav', '.q-main-layout', '.q-workspace', '.q-step-panel', '.q-plan-sidebar'];
      return sels.map(s => {
        const el = document.querySelector(s);
        if (!el) return { s, found: false };
        const r = el.getBoundingClientRect();
        const cs = window.getComputedStyle(el);
        return {
          s,
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
          cssWidth: cs.width,
          cssMaxWidth: cs.maxWidth,
          cssMinWidth: cs.minWidth,
          boxSizing: cs.boxSizing,
          pl: cs.paddingLeft,
          pr: cs.paddingRight,
          ml: cs.marginLeft,
          mr: cs.marginRight
        };
      });
    }`);
    console.log('=== EXACT TREE REPORT STEP 1 ===');
    console.log(JSON.stringify(treeReport, null, 2));
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

    console.log('--- SWITCHING TO STEP 3 ---');
    const step3Res = await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step="3"]');
      if (!btn) return { error: 'No button found with data-quote-step=3' };
      btn.click();
      return { clicked: true, currentStep: window.state ? window.state.quoteStep : 'no state' };
    }`);
    console.log('Step 3 click res:', step3Res);
    await new Promise(r => setTimeout(r, 1000));

    // Take screenshot of step 3
    const ss = await send('Page.captureScreenshot', { format: 'png' });
    if (ss && ss.result && ss.result.data) {
      fs.writeFileSync(path.join(__dirname, 'step3_actual_320.png'), Buffer.from(ss.result.data, 'base64'));
      console.log('Saved step3_actual_320.png');
    }

    const domInfo = await evaluate(`function() {
      const page = document.querySelector('.q-builder-page');
      const stepPanel = document.querySelector('.q-step-panel');
      const sched = document.querySelector('.q-schedule-card');
      const app = document.getElementById('app');
      return {
        hash: window.location.hash,
        appHtmlStart: app ? app.innerHTML.slice(0, 300) : null,
        allButtons: Array.from(document.querySelectorAll('button')).map(b => ({
          text: b.textContent.trim(),
          cls: b.className,
          step: b.dataset.quoteStep,
          next: b.hasAttribute('data-quote-next')
        })).slice(0, 15)
      };
    }`);
    console.log('DOM info:', JSON.stringify(domInfo, null, 2));

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
