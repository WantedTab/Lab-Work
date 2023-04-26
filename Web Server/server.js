const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello from my web server</h1>');
        res.end();
    } else if (req.url === '/SPRING.html') {
        fs.readFile('primavara.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/WINTER.html') {
        fs.readFile('iarna.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
});

server.listen(8080, () => {
    console.log('Server-ul functioneaza');
});