var http = require('http');
var url = require('url');
var querystring = require('querystring');
http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	var pathStr = url.parse(req.url).query;
	var param = querystring.parse(pathStr);
	res.writeHead(200,'Content-Type: text/plain');
	res.end('ending....');
}).listen(3000);
console.log('server start port 3000');