var express=require("express"),
app=express();
//request = require('supertest');

app.get('/user',function(req,res){

res.send('Welcome');
});

app.get('/api',function(req,res){
res.send({name:'Abhilash'});
});


app.listen('3000');
console.log('listen to port 3000');
