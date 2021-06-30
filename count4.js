var events=require('events');
var util = require('util');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(msg){
//     console.log(msg);
// });
// myEmitter.emit('someEvent','the even was emmited');

// function myEmitterq(someEvent,msg){
//     console.log(msg);
// };
// myEmitterq('someEvent','the even was emmited');


var Person = function(name)
{
    this.name=name;
};
util.inherits(Person,events.EventEmitter);

var james1 =new Person('james');
var mary1 =new Person('mary');
var ryu1 =new Person('ryu');

var people = [james1,mary1,ryu1];

people.forEach(function(Person)
{
    Person.on('speak1',function(mssg)
    {
        console.log(Person.name + ' said: ' +mssg);
    });
});

james1.emit('speak1','hey dudes');
mary1.emit('speak', 'i love you');
ryu1.emit('speak', 'love codding');
