const http = require('http');

/*
 *   Happy server always respond with HTTP 200
 */

http.createServer(function (req, res) {
    res.writeHead(200);
    res.end();
}).listen(8888);