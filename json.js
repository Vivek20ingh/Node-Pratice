var http =require('http');

var server = http.createServer(function(req,res)
{
    console.log('request was made: '+ req.url)
    res.writeHead(200,{'Content-Type': 'application/json'});
    var myobj={
        name: 'vivek',
        job: 'software developer',
        age: 21

    };
    res.end(JSON.stringify(myobj));
});

server.listen(3000,'127.0.0.2');
console.log('you listening to port 300')