var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({extended:false})




app.use('/assets', express.static('assets'));
  

app.get('/',function(req,res)
{
    res.send('this is home page');
});
app.get('/contact',function(req,res)
{
   
    res.render('contact',{qs:req.query});
    
});
app.post('/contact',urlencodedParser,function(req,res)
{
    console.log(req.body);
    res.render('contact-success',{data:req.body});
    
});

app.get('/home',function(req,res)
{
    res.render('index');
});
app.get('/profile/:name',function(req,res)
{
    var data ={age:29, job:'developer' , hobbies:['sleeping','codding','developing','playing']};
    res.render('profile',{person: req.params.name,data: data})
});
app.listen(3000);