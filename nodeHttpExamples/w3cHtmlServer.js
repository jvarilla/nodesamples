var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<!DOCTYPE html><html><head></head><body><p>Swag</p></body></html>");
}).listen(3000);