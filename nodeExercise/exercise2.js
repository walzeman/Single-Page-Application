
const express = require('express');
var morgan = require('morgan')
var joinPath = require('path.join')
var fs = require('fs')

var favicon = require('serve-favicon')

const app = express();

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(joinPath(__dirname, 'access.log'), {flags: 'a'})

// Simple app that will log all request in the Apache combined format to STDOUT or console
// app.use(morgan('combined'))  

app.use(favicon(joinPath(__dirname, '/public/favicon.ico')))

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

// to access static files in a directory ' public '
app.use('/resources',express.static(joinPath(__dirname, 'public')));  // path.join(__dirname, 'public')

app.get('/', (req, res) => {
    res.send('Hello From Express');
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
})