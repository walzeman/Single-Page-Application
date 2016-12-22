/**
 * Created by wal on 12/19/16.
 */

var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')

 var index = require('./routes/index')
 var tasks = require('./routes/tasks')

var port = 5000;

// View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

// -- Access allow policy

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET, PATCH, DELETE');
//     next();
// });

// Set static folder
app.use(express.static(path.join(__dirname, 'client')))

// Body Parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

 app.use('/', index)
 app.use('/api', tasks)






app.listen(port, function(){
    console.log('Server started on port '+  port)
})