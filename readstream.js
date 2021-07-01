var http = require('http');

var fs= require('fs');

var myreadstream=fs.createReadStream(__dirname + '/readme.txt','utf8');

var mywritestream = fs.createWriteStream(__dirname+ '/writeme.txt');
var chunk="sndn";
myreadstream.on('data', function(chunk1){
    console.log('new chunk received: ')
    console.log(chunk1);
});

mywritestream.write(chunk);