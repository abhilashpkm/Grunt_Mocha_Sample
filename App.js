var express = require('express');
var bodyParser = require('body-parser');
var app = express();
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.send(500, 'Unable to process request.');
});
//request = require('supertest');

app.get('/user',function(req,res){

res.send('Welcome');
});

app.get('/api',function(req,res){
res.send({name:'Abhilash'});
});

app.post('/login',function(req,res){
var username=req.body.username;
var password=req.body.password;
if(username=='user' && password=='passme')
	res.send({message:'sucess'})
else
	{
		res.statusCode=500;
		res.send({message:'fail'})
	} 
  
}); 


app.listen('3000');
console.log('listen to port 3000');

// app.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.send(500, 'Unable to process request.');
// });