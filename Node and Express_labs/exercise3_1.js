
var express = require('express')
var app = express()
var myLogger = require('./myLogger.js')

app.listen(3000)
app.use(myLogger)

app.get('/',end);
app.get('/hello',hello,bye);
	
// requestTime,
// function requestTime ( req, res, next){
//     req.requestTime = Date.now()
//     next()
// }

function hello(req,res,next){
  res.write('Hello \n');
  next();
}

function bye(req,res,next){
  res.write('Bye \n');
  res.end();
}


function end(req, res, next){
    res.end();
}
