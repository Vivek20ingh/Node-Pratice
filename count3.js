var counter =function(arr)
{
    return 'There are ' +arr.length+' elements in araay';
};

var adder=function(a,b)
{
    return `The sum of 2 number is ${a+b}`;
}
var pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports={
    counter: counter,
    pi: pi,
    adder: adder
}
