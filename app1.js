setTimeout(function(){
    console.log('3 seconds have passed')
},3000);

var time=0;
var timer=setInterval(function(){
    time+=2;
    console.log(time+ 'second have passed');
    if(time>7)
    {
        clearInterval(timer);
    }
},2000);

console.log(__dirname);
console.log(__filename)