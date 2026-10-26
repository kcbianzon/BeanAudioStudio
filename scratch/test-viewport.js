const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  console.log('REQ:', req.url);
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(__dirname, '..', 'public', reqPath);
  console.log('File path:', filePath, fs.existsSync(filePath));
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

server.listen(8089, () => {
  console.log('Server started on 8089');
  const edgePath = '"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"';
  const cmd = `${edgePath} --headless=new --disable-gpu --window-size=320,800 --screenshot=test_320.png "http://localhost:8089/#quote"`;
  setTimeout(() => {
    exec(cmd, (err, stdout, stderr) => {
      console.log('Edge screenshot done, err:', err, 'stdout:', stdout, 'stderr:', stderr);
      server.close();
      if (fs.existsSync('test_320.png')) {
        console.log('test_320.png size:', fs.statSync('test_320.png').size);
      }
    });
  }, 1500);
});
