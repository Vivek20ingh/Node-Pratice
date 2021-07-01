var fs= require('fs');
var http =require('http');

var server = http.createServer(function(req,res)
{
    console.log('request was made: '+ req.url)
    if(req.url=== '/home' || req.url ==='/')
    {
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname +'/index1.html').pipe(res);
    }
    else if(req.url === '/contact')
    {
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname +'/contact.html').pipe(res);
    }
    else{
        res.writeHead(400,{'Content-Type': 'text/plain'});
        res.end('sever error')
    }
    
   
   
});

server.listen(3000,'127.0.0.2');
console.log('you listening to port 300')