const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello, Nabil!");
    }
    else if (req.url === '/revou') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello, Revou!");
    }
    else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end("Salah URL!");
    }
});

const PORT = process.env.PORT || 3000;
const IP = '0.0.0.0';
server.listen(PORT, IP, () => {
    console.log('Server sudah jalan!');
});