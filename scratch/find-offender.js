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
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const userDataDir = path.join(__dirname, 'edge_user_data_3');
  
  const edgeProcess = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    '--window-size=320,800',
    'http://localhost:8089/'
  ]);

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
    const evaluate = async (fnStr) => {
      const res = await send('Runtime.evaluate', {
        expression: `(${fnStr})()`,
        returnByValue: true
      });
      return res.result?.result?.value;
    };

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

    await send('Page.navigate', { url: 'http://localhost:8089/#quote' });
    await new Promise(r => setTimeout(r, 600));

    await evaluate(`function() {
      const pId = (typeof products !== 'undefined' && products.length > 0) ? products[0].id : 'p-sound-starter';
      localStorage.setItem('beantown-selected-products', JSON.stringify({ [pId]: 2 }));
      location.reload();
    }`);
    await new Promise(r => setTimeout(r, 1200));

    // Test what happens when we hide q-step-nav-footer or children
    const culpritTest = await evaluate(`function() {
      const ws = document.querySelector('.q-workspace');
      const footer = document.querySelector('.q-step-nav-footer');
      const stepPanel = document.querySelector('.q-step-panel');
      const w0 = ws ? ws.getBoundingClientRect().width : null;

      // Check footer children
      const footerItems = footer ? Array.from(footer.children).map(c => ({
        tag: c.tagName,
        text: c.textContent.trim(),
        w: Math.round(c.getBoundingClientRect().width),
        scrollW: c.scrollWidth
      })) : [];

      if (footer) footer.style.display = 'none';
      const wAfterHideFooter = ws ? ws.getBoundingClientRect().width : null;
      if (footer) footer.style.display = '';

      if (stepPanel) stepPanel.style.display = 'none';
      const wAfterHidePanel = ws ? ws.getBoundingClientRect().width : null;
      if (stepPanel) stepPanel.style.display = '';

      return {
        initialWsWidth: w0,
        footerItems,
        wAfterHideFooter,
        wAfterHidePanel
      };
    }`);

    console.log('=== CULPRIT TEST RESULTS ===');
    console.log(JSON.stringify(culpritTest, null, 2));
    const offenders = await evaluate(`function() {
      const ws = document.querySelector('.q-workspace');
      if (!ws) return 'no workspace';
      const list = [];
      ws.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        const cs = window.getComputedStyle(el);
        // check if this element has fixed width or min-width or margin or padding that forces width
        if (el.scrollWidth > 312 || r.width > 312 || el.clientWidth > 312) {
          list.push({
            tag: el.tagName,
            cls: el.className,
            text: el.children.length === 0 ? el.textContent.trim().slice(0, 30) : undefined,
            width: Math.round(r.width),
            scrollW: el.scrollWidth,
            clientW: el.clientWidth,
            cssW: cs.width,
            cssMinW: cs.minWidth,
            cssMaxW: cs.maxWidth,
            pl: cs.paddingLeft,
            pr: cs.paddingRight,
            ml: cs.marginLeft,
            mr: cs.marginRight,
            whiteSpace: cs.whiteSpace,
            flex: cs.flex,
            display: cs.display
          });
        }
      });
      return list;
    }`);

    console.log('=== WORKSPACE OFFENDERS IN STEP 1 ===');
    console.log(JSON.stringify(offenders, null, 2));

    // Check step 2
    await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step=\"2\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 600));

    const offenders2 = await evaluate(`function() {
      const ws = document.querySelector('.q-workspace');
      if (!ws) return 'no workspace';
      const list = [];
      ws.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        const cs = window.getComputedStyle(el);
        if (el.scrollWidth > 312 || r.width > 312) {
          list.push({
            tag: el.tagName,
            cls: el.className,
            text: el.children.length === 0 ? el.textContent.trim().slice(0, 30) : undefined,
            width: Math.round(r.width),
            scrollW: el.scrollWidth,
            clientW: el.clientWidth,
            cssMinW: cs.minWidth,
            whiteSpace: cs.whiteSpace,
            display: cs.display
          });
        }
      });
      return list;
    }`);
    console.log('=== WORKSPACE OFFENDERS IN STEP 2 ===');
    console.log(JSON.stringify(offenders2, null, 2));

    // Check step 3
    await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step=\"3\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 600));

    const offenders3 = await evaluate(`function() {
      const ws = document.querySelector('.q-workspace');
      if (!ws) return 'no workspace';
      const list = [];
      ws.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        const cs = window.getComputedStyle(el);
        if (el.scrollWidth > 312 || r.width > 312) {
          list.push({
            tag: el.tagName,
            cls: el.className,
            text: el.children.length === 0 ? el.textContent.trim().slice(0, 30) : undefined,
            width: Math.round(r.width),
            scrollW: el.scrollWidth,
            clientW: el.clientWidth,
            cssMinW: cs.minWidth,
            whiteSpace: cs.whiteSpace,
            display: cs.display
          });
        }
      });
      return list;
    }`);
    console.log('=== WORKSPACE OFFENDERS IN STEP 3 ===');
    console.log(JSON.stringify(offenders3, null, 2));

    ws.close();
    edgeProcess.kill();
    server.close();
    process.exit(0);
  };
});
