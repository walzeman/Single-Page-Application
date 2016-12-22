
var express = require('express')
var router = express.Router()

router.get('/', function(req, res,  next){
    //    res.send('INDEX PAGE')
    // res.render('../client/index.html')
    res.render('index.html')
})

module.exports = router;
