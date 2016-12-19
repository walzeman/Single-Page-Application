
var express = require('express');

var fs = require("fs");

var cds = express.Router();


cds.get('/', (req, res) => {
    res.end(' CDS HOME PAGE \n')
   
})

cds.get('/List', (req, res) => {
    fs.readFile(__dirname + "/" + "cds.json", 'utf8', function (err, data) {

        console.log(data);
        res.end(data +'\n');

    });
})

cds.post('/add', (req, res) => {
    // First read existing cds.
    fs.readFile(__dirname + "/" + "cds.json", 'utf8', function (err, data) {
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

            fs.writeFile(__dirname + "/" + "cds.json", JSON.stringify(data), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.write('file created successfully.')
                    res.end('\n')
                }
            });

        })


    });
})

cds.put('/update', (req, res) => {

    //  First read existing cds.
    fs.readFile(__dirname + "/" + "cds.json", 'utf8', function (err, data) {
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

            fs.writeFile(__dirname + "/" + "cds.json", JSON.stringify(data), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.write('file updated successfully.')
                    res.end('\n')
                }

            })

        })
    })
})

cds.get('/:id', function (req, res) {

    // First read existing cds.
    fs.readFile(__dirname + "/" + "cds.json", 'utf8', function (err, data) {
        books = JSON.parse(data);
        var book = books["cd" + req.params.id]
        console.log(book);
        res.end(JSON.stringify(book) + '\n');
    });
})

cds.delete('/delete/:id', function (req, res) {

    // First read existing cds.
    fs.readFile(__dirname + "/" + "cds.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["cd" + req.params.id];

        console.log(data);
        res.end(JSON.stringify(data) +'\n');
    });
})

module.exports = cds;