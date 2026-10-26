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
  const userDataDir = path.join(__dirname, 'edge_user_data_test');
  
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

    // Test injecting minmax(0, 1fr)
    const testResult = await evaluate(`function() {
      const style = document.createElement('style');
      style.id = 'test-fix-style';
      style.textContent = \`
        .q-main-layout {
          grid-template-columns: minmax(0, 1fr) !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        .q-workspace {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          overflow: hidden !important;
        }
        .q-plan-sidebar {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
        }
        .q-step-panel {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box !important;
        }
      \`;
      document.head.appendChild(style);

      const ml = document.querySelector('.q-main-layout');
      const ws = document.querySelector('.q-workspace');
      const sp = document.querySelector('.q-step-panel');

      return {
        mainLayoutW: ml ? Math.round(ml.getBoundingClientRect().width) : null,
        workspaceW: ws ? Math.round(ws.getBoundingClientRect().width) : null,
        stepPanelW: sp ? Math.round(sp.getBoundingClientRect().width) : null,
        stepPanelRight: sp ? Math.round(sp.getBoundingClientRect().right) : null,
        vw: window.innerWidth
      };
    }`);

    console.log('=== TEST FIX INJECTION RESULTS ===');
    console.log(JSON.stringify(testResult, null, 2));

    // Now test Step 2
    await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step=\"2\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 500));

    const step2Test = await evaluate(`function() {
      const sp = document.querySelector('.q-step-panel');
      const cards = Array.from(document.querySelectorAll('.q-venue-card')).map(c => {
        const r = c.getBoundingClientRect();
        return {
          title: c.querySelector('.q-venue-title')?.textContent.trim(),
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width)
        };
      });
      const input = document.querySelector('.q-clean-big-input');
      const inputR = input ? input.getBoundingClientRect() : null;

      return {
        stepPanelW: sp ? Math.round(sp.getBoundingClientRect().width) : null,
        stepPanelRight: sp ? Math.round(sp.getBoundingClientRect().right) : null,
        cards,
        input: inputR ? { left: Math.round(inputR.left), right: Math.round(inputR.right), width: Math.round(inputR.width) } : null
      };
    }`);

    console.log('=== STEP 2 VENUE CARDS WITH FIX ===');
    console.log(JSON.stringify(step2Test, null, 2));

    // Now test Step 3 Calendar
    await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step=\"3\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 500));

    const step3Test = await evaluate(`function() {
      const sp = document.querySelector('.q-step-panel');
      const sched = document.querySelector('.q-schedule-card');
      const schedR = sched ? sched.getBoundingClientRect() : null;
      const nextBtn = document.querySelector('.q-cal-circle-btn[data-cal-next]');
      const nextBtnR = nextBtn ? nextBtn.getBoundingClientRect() : null;
      const cells = Array.from(document.querySelectorAll('.q-new-cal-cell'));
      const lastCell = cells[cells.length - 1];
      const lastCellR = lastCell ? lastCell.getBoundingClientRect() : null;
      const pillBox = document.querySelector('.q-schedule-pill-box');
      const pillBoxR = pillBox ? pillBox.getBoundingClientRect() : null;

      return {
        stepPanelW: sp ? Math.round(sp.getBoundingClientRect().width) : null,
        stepPanelRight: sp ? Math.round(sp.getBoundingClientRect().right) : null,
        sched: schedR ? { left: Math.round(schedR.left), right: Math.round(schedR.right), width: Math.round(schedR.width) } : null,
        nextBtn: nextBtnR ? { left: Math.round(nextBtnR.left), right: Math.round(nextBtnR.right) } : null,
        lastCell: lastCellR ? { text: lastCell.textContent.trim(), left: Math.round(lastCellR.left), right: Math.round(lastCellR.right) } : null,
        pillBox: pillBoxR ? { left: Math.round(pillBoxR.left), right: Math.round(pillBoxR.right), width: Math.round(pillBoxR.width) } : null
      };
    }`);

    console.log('=== STEP 3 CALENDAR WITH FIX ===');
    console.log(JSON.stringify(step3Test, null, 2));

    // Test expanding Phone Alarm Drum Roller Picker
    await evaluate(`function() {
      const badge = document.querySelector('.q-schedule-time-badge');
      if (badge) badge.click();
    }`);
    await new Promise(r => setTimeout(r, 500));

    const alarmTest = await evaluate(`function() {
      const alarm = document.querySelector('.q-alarm-card-wrap');
      const drum = document.querySelector('.q-alarm-drum-stage');
      const tabs = document.querySelector('.q-alarm-target-tabs');
      const actions = document.querySelector('.q-alarm-foot-actions');

      return {
        hasAlarm: !!alarm,
        alarmR: alarm ? { left: Math.round(alarm.getBoundingClientRect().left), right: Math.round(alarm.getBoundingClientRect().right), width: Math.round(alarm.getBoundingClientRect().width) } : null,
        drumR: drum ? { left: Math.round(drum.getBoundingClientRect().left), right: Math.round(drum.getBoundingClientRect().right), width: Math.round(drum.getBoundingClientRect().width) } : null,
        tabsR: tabs ? { left: Math.round(tabs.getBoundingClientRect().left), right: Math.round(tabs.getBoundingClientRect().right), width: Math.round(tabs.getBoundingClientRect().width) } : null,
        actionsR: actions ? { left: Math.round(actions.getBoundingClientRect().left), right: Math.round(actions.getBoundingClientRect().right), width: Math.round(actions.getBoundingClientRect().width) } : null
      };
    }`);

    // Test Step 4 (Equipment & Crew)
    await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step=\"4\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 500));

    const step4Test = await evaluate(`function() {
      const sp = document.querySelector('.q-step-panel');
      const overflowing = [];
      document.querySelectorAll('.q-workspace *').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > window.innerWidth + 1) {
          overflowing.push({ tag: el.tagName, cls: el.className, right: Math.round(r.right), w: Math.round(r.width) });
        }
      });
      return {
        stepPanelW: sp ? Math.round(sp.getBoundingClientRect().width) : null,
        stepPanelRight: sp ? Math.round(sp.getBoundingClientRect().right) : null,
        overflowCount: overflowing.length,
        overflowing: overflowing.slice(0, 10)
      };
    }`);
    console.log('=== STEP 4 TEST ===', JSON.stringify(step4Test, null, 2));

    // Test Step 5 (Review & Send)
    await evaluate(`function() {
      const btn = document.querySelector('[data-quote-step=\"5\"]');
      if (btn) btn.click();
    }`);
    await new Promise(r => setTimeout(r, 500));

    const step5Test = await evaluate(`function() {
      const sp = document.querySelector('.q-step-panel');
      const overflowing = [];
      document.querySelectorAll('.q-workspace *').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > window.innerWidth + 1) {
          overflowing.push({ tag: el.tagName, cls: el.className, right: Math.round(r.right), w: Math.round(r.width) });
        }
      });
      return {
        stepPanelW: sp ? Math.round(sp.getBoundingClientRect().width) : null,
        stepPanelRight: sp ? Math.round(sp.getBoundingClientRect().right) : null,
        overflowCount: overflowing.length,
        overflowing: overflowing.slice(0, 10)
      };
    }`);
    console.log('=== STEP 5 TEST ===', JSON.stringify(step5Test, null, 2));

    ws.close();
    edgeProcess.kill();
    server.close();
    process.exit(0);
  };
});
