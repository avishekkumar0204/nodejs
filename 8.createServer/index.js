const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if(req.url=='/')
        res.end("Home Page");
    else if(req.url=='/about')
        res.end("About page");
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Page doesn't exist</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
