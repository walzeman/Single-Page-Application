
var express = require('express')
var router = express.Router()


var mongoose = require('mongoose')
var Artist = require('../artist.model')

var db = 'mongodb://localhost/wal'
mongoose.connect(db)

// var artist1 = new Artist({
//     name: 'Adele',
//     album: 'Adele21'
// })

// artist1.save(function(err, res){
//     if(err)
//       return console.log(err);
// })

router.get('/', function(req, res,  next){
       res.send('TASKS PAGE')
})


// router.get('/', (req, res) => {
//     res.send('happy to be here')
// })

router.get('/artists', function(req, res){
    console.log('getting all artists')
    Artist.find({}).exec(function(err, artists){
        if(err){
            res.send('error has occured')
        } else {
            console.log(artists)
            res.json(artists)
        }


    })
})


router.get('/artists/:id', function(req, res){
    console.log('getting one artist')
    Artist.findOne({
        _id:req.params.id
    }).exec(function(err, artist){
        if(err){
            res.send('error has occured')
        } else {
            console.log(artist)
            res.json(artist)
        }
    })
})

router.post('/artist', function(req, res){
    var newArtist = new Artist();
    newArtist.name = req.body.name;
    newArtist.Album = req.body.Album;

    newArtist.save(function(err, artist){
        if(err){
            res.send('error saving book')
        } else {
            console.log(artist)
            res.send(artist)
        }
    })
})

// other way of creating an artist

router.post('/artist1', function(req, res){
    Artist.create(req.body, function(err, artist){
        if(err){
            res.send('error saving artist')
        } else {
            console.log(artist)
            res.send(artist)
        }
    })
})

router.put('/artist/:id', function(req, res){
    Artist.findOneAndUpdate({
            _id:req.params.id
        },
        {$set:{name: req.body.name}},
        {upsert: true},
        function(err, newArtist){
            if(err){
                res.send('error updating artist')
            } else {
                console.log(newArtist)
                res.send(newArtist)
            }

        })
})

router.delete('/artist/:id', function(req, res){
    Artist.findOneAndRemove({
        _id: req.params.id
    }, function(err, deletedArtist){
        if(err){
            res.send('error deleting artist')
        } else {
            console.log(deletedArtist)
            res.send(deletedArtist)
        }
    })
})


module.exports = router;