
var express = require('express');

var fs = require("fs");

var books = express.Router();


books.get('/', (req, res) => {
    res.end(' BOOKS HOME PAGE \n')
   
})

books.get('/List', (req, res) => {
    fs.readFile(__dirname + "/" + "books.json", 'utf8', function (err, data) {

        console.log(data);
        res.end(data);

    });
})

books.post('/add', (req, res) => {
    // First read existing books.
    fs.readFile(__dirname + "/" + "books.json", 'utf8', function (err, data) {
        data = JSON.parse(data);

        var newData = ''
        req.on('data', (chunk) => {
            newData += chunk;
        })
        req.on('end', () => {

            newData = JSON.parse(newData)
            for (var key in newData) {
                data[key] = newData[key];
            }

            // console.log( data );

            fs.writeFile(__dirname + "/" + "books.json", JSON.stringify(data), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.write('file created successfully.')
                    res.end()
                }
            });

        })


    });
})

books.put('/update', (req, res) => {

    //  First read existing books.
    fs.readFile(__dirname + "/" + "books.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        //  data["book3"] = book["book3"];

        var newData = ''
        req.on('data', (chunk) => {
            newData += chunk;
        })
        req.on('end', () => {

            newData = JSON.parse(newData)
            for (var key in newData) {
                data[key] = newData[key];
            }

            fs.writeFile(__dirname + "/" + "books.json", JSON.stringify(data), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.write('file updated successfully.')
                    res.end()
                }

            })

        })
    })
})

books.get('/:id', function (req, res) {

    // First read existing books.
    fs.readFile(__dirname + "/" + "books.json", 'utf8', function (err, data) {
        books = JSON.parse(data);
        var book = books["book" + req.params.id]
        console.log(book);
        res.end(JSON.stringify(book) + '\n');
    });
})

books.delete('/delete/:id', function (req, res) {

    // First read existing books.
    fs.readFile(__dirname + "/" + "books.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["book" + req.params.id];

        console.log(data);
        res.end(JSON.stringify(data) +'\n');
    });
})

module.exports = books;