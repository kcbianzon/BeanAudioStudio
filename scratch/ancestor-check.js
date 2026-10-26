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
  const userDataDir = path.join(__dirname, 'edge_user_data_2');
  
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

    await evaluate(`function() {
      const pId = (typeof products !== 'undefined' && products.length > 0) ? products[0].id : 'p-sound-starter';
      localStorage.setItem('beantown-selected-products', JSON.stringify({ [pId]: 2 }));
      window.location.hash = '#quote';
    }`);
    await new Promise(r => setTimeout(r, 1200));

    // Measure ancestors
    const report = await evaluate(`function() {
      const selectors = [
        'html',
        'body',
        '.site-shell',
        '#app',
        '.page.q-builder-page',
        '.q-hero',
        '.q-progress-nav',
        '.q-main-layout',
        '.q-workspace',
        '.q-step-panel',
        '.q-plan-sidebar'
      ];
      return selectors.map(sel => {
        const el = document.querySelector(sel);
        if (!el) return { sel, found: false };
        const cs = window.getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          sel,
          found: true,
          rect: { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) },
          width: cs.width,
          minWidth: cs.minWidth,
          maxWidth: cs.maxWidth,
          boxSizing: cs.boxSizing,
          paddingLeft: cs.paddingLeft,
          paddingRight: cs.paddingRight,
          marginLeft: cs.marginLeft,
          marginRight: cs.marginRight,
          display: cs.display
        };
      });
    }`);

    console.log('=== ANCESTOR REPORT ===');
    console.log(JSON.stringify(report, null, 2));

    // Also check step 2 venue cards
    await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step=\"2\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 600));

    const venueReport = await evaluate(`function() {
      const selectors = [
        '.q-clean-section',
        '.q-clean-big-input',
        '.q-venue-header-row',
        '.q-venue-grid',
        '.q-venue-card'
      ];
      return selectors.map(sel => {
        const el = document.querySelector(sel);
        if (!el) return { sel, found: false };
        const cs = window.getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          sel,
          rect: { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) },
          width: cs.width,
          minWidth: cs.minWidth,
          maxWidth: cs.maxWidth,
          boxSizing: cs.boxSizing,
          paddingLeft: cs.paddingLeft,
          paddingRight: cs.paddingRight
        };
      });
    }`);
    console.log('=== VENUE CARDS REPORT ===');
    console.log(JSON.stringify(venueReport, null, 2));

    // Check step 3 schedule card
    await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step=\"3\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 600));

    const schedReport = await evaluate(`function() {
      const selectors = [
        '.q-schedule-card',
        '.q-schedule-cal-col',
        '.q-cal-pill-header',
        '.q-cal-weekdays-row',
        '.q-cal-days-grid',
        '.q-schedule-controls-col',
        '.q-schedule-pill-box',
        '.q-schedule-date-input',
        '.q-schedule-time-badge'
      ];
      return selectors.map(sel => {
        const el = document.querySelector(sel);
        if (!el) return { sel, found: false };
        const cs = window.getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          sel,
          rect: { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) },
          width: cs.width,
          minWidth: cs.minWidth,
          maxWidth: cs.maxWidth,
          boxSizing: cs.boxSizing,
          paddingLeft: cs.paddingLeft,
          paddingRight: cs.paddingRight
        };
      });
    }`);
    console.log('=== SCHEDULE CARD REPORT ===');
    console.log(JSON.stringify(schedReport, null, 2));

    ws.close();
    edgeProcess.kill();
    server.close();
    process.exit(0);
  };
});
