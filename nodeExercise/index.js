var MongoClient = require('mongodb').MongoClient

var URL = 'mongodb://localhost:27017/test'

MongoClient.connect(URL, function(err, db) {
  if (err) return

   console.log('connected successfully to a database server')

  var collection = db.collection('foods')
  collection.insert({name: 'taco', tasty: true}, function(err, result) {
  collection.find({name: 'taco'}).toArray(function(err, docs) {
      console.log(docs[0])
  db.close()
    })
  })
})