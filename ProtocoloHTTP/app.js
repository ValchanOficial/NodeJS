var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (req, resp) {
    var path = url.parse(req.url).pathname;

    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            resp.writeHead(400, { 'Content-Type': 'text/html' });
            resp.write('Not Found - <a href="index.html">Index</a>');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(data);
        }
        resp.end();
    });
});

server.listen(3000);