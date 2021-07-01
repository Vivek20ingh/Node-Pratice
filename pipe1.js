var http = require('http');

var fs= require('fs');


var server = http.createServer(function(req,res)
{
    console.log('request was made: '+ req.url)
    var myreadstream=fs.createReadStream(__dirname + '/index1.html','utf8');
    res.writeHead(200,{'Content-Type': 'text/html'});
    myreadstream.pipe(res);
});

server.listen(3000,'127.0.0.2');
console.log('you listening to port 300')