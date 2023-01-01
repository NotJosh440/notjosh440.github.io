const http = require('http');
const fs = require('fs');

var port = 8000;
var extention = fs.readFileSync('./extension.js');
http.createServer(function (req, res) {
    res.write(extention);
    res.end();
}).listen(port);

console.log(`Server is running on http://localhost:${port}`);   