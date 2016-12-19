
var express = require('express')
var app = express();
app.listen(3000)
 
var apiRouter = express.Router();
 
apiRouter.use(logger);
 
app.use('/api',apiRouter);
app.use(hello,bye);
 


//app.get('/hello',hello,bye);
	

function logger(req,res,next){
  console.log(new Date(), req.method, req.url);
  next();
}

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
