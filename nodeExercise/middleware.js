
var exp = require('express');
var app = exp();

var myLogger = function(req, res, next){
    console.log('LOGGED');
    next()
}

var requestTime = function (req, res, next){
    req.requestTime = Date.now();
    next()
}

app.use(myLogger);

app.use(requestTime);
app.get('/', function(req, res){
    var resText = 'hello world! <br>';
    resText +=  '<small> Requested at :'+ req.requestTime + '</small>'
    res.send(resText);
})

app.listen(3001);