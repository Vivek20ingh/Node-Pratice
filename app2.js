function sayhi()
{
    console.log('hi');
}

sayhi();

function callfuction(fun)
{
    fun();
}

var saybye =function()
{
    console.log('bye');
};
saybye();
callfuction(saybye);