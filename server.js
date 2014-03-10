var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("hello world");
}).listen(11111);
console.log("server running at http://localhost:11111");
