
var express = require('express');
var app = express();

var books = require('./books')
var cds = require('./cds')


app.use('/api/books', books)
app.use('/api/cds', cds)

app.listen(3000)
