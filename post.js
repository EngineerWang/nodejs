var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	switch(pathname){
		case '/post':
			resPost(req, res);
			break;
		default:
			resDefault(res);
			break;
	}
}).listen(3000);
console.log('server listen port 3000');
function resDefault(res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var pathname = __dirname + '/module/' + url.parse('post.html').pathname;
	var indexPage = fs.readFileSync(pathname);
	res.end(indexPage);
	//console.log(pathname);
}
function resPost(req, res){
	var postData = '';
	req.setEncoding('utf8');
	req.addListener('data', function(postDatachunk){
		postData += postDatachunk;
	});
	req.addListener('end', function(){
		var param = querystring.parse(postData);
		console.log(param);
	});
	console.log(postData);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('success');
}