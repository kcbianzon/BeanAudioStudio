const { execSync } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
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

server.listen(5174, () => {
  console.log('Test server up on port 5174');
  try {
    // 1. Take 320px screenshot of Home
    const cmdHome = `"${edgePath}" --headless --disable-gpu --window-size=320,640 --screenshot=scratch/test_home_320.png http://localhost:5174/#home`;
    execSync(cmdHome, { timeout: 8000 });
    console.log('Captured Home 320px screenshot!');

    // 2. Take 320px screenshot of Quote
    const cmdQuote = `"${edgePath}" --headless --disable-gpu --window-size=320,640 --screenshot=scratch/test_quote_320.png http://localhost:5174/#quote`;
    execSync(cmdQuote, { timeout: 8000 });
    console.log('Captured Quote 320px screenshot!');

    // 3. Take 320px screenshot of Rentals
    const cmdRentals = `"${edgePath}" --headless --disable-gpu --window-size=320,640 --screenshot=scratch/test_rentals_320.png http://localhost:5174/#rentals`;
    execSync(cmdRentals, { timeout: 8000 });
    console.log('Captured Rentals 320px screenshot!');
  } catch (err) {
    console.log('Edge screenshot note:', err.message);
  } finally {
    server.close();
    console.log('Validation finished.');
  }
});
