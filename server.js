const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
 
  if (req.headers.upgrade === 'websocket') {
    res.writeHead(426);
    res.end('WebSocket connections not supported');
    return;
  }

  let url = req.url;

  if (url.includes('?')) {
    url = url.split('?')[0];
  }

  if (url === '/') {
    url = '/index.html';
  }

  let filePath = path.join(__dirname, 'public', url);
  
  if (url.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }
  
  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log(`File not found: ${filePath}`);
        if (extname === '.html' || extname === '') {
          fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) {
              res.writeHead(500);
              res.end('Server Error');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(content, 'utf-8');
            }
          });
        } else {
          res.writeHead(404);
          res.end('File not found');
        }
      } else {
        console.log(`Server error: ${err.code}`);
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Press Ctrl+C to stop the server`);
});