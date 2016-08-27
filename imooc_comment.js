var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
	'content': 'test successful!',
	'mid': '8837'
});
var options = {
	hostname: 'www.imooc.com',
	port: '80',
	path: '/course/docomment',
	method: 'POST',
	headers: {
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=211e4164-06a3-47da-970c-19c757201e3a; imooc_isnew_ct=1466000603; loginstate=1; apsid=hmMzU5ODAxZWMzZDhiNzBmNDU2YjE2ZWJkZjk4M2EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzA5MjcwMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGE2NmVhMWRiOWQ1MThlMWJjOWVhYzI3ODQxMTgzZDA5gZ2QV4GdkFc%3DYz; PHPSESSID=rjkrnu899t2hgurvn716veta96; IMCDNS=0; jwplayer.qualityLabel=è¶æ¸; jwplayer.playAuto=true; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1470024793,1470024808,1471007323,1471046309; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1471055682; imooc_isnew=2; cvde=57ae62a3aedc0-37',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
};
var req = http.request(options, function(res){
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));
	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});
	res.on('end', function(){
		console.log('评论完毕!');
	});
});
req.on('error', function(e){
	console.log('Error' + e.message);
});
req.write(postData);
req.end();