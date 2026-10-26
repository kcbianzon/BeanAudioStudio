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

if (!fs.existsSync('scratch')) fs.mkdirSync('scratch');

const server = http.createServer((req, res) => {
  let file = req.url.split('?')[0];
  if (file === '/' || !file.includes('.')) file = '/index.html';
  const fp = path.join(__dirname, 'public', file);
  if (fs.existsSync(fp)) {
    const ext = path.extname(fp);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    fs.createReadStream(fp).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(5173, () => {
  try {
    const cmd = `"${edgePath}" --headless --disable-gpu --window-size=320,640 --screenshot=scratch/home_320.png http://localhost:5173/#home`;
    execSync(cmd, { timeout: 12000 });
    console.log('Home screenshot generated! File size:', fs.statSync('scratch/home_320.png').size);
  } catch (err) {
    console.error('Edge error:', err.message);
  } finally {
    server.close();
  }
});
