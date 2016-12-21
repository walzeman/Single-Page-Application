var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var URL = 'mongodb://localhost:27017/wal'

MongoClient.connect(URL, function(err, db) {
  if (err) return

   console.log('connected successfully to a database server')

  var collec = db.collection('inserts')
   collec.insertOne({a:1}, function(err,r){
       assert.equal(null, err)
       assert.equal(1, r.insertedCount)
   })

   collec.insertMany([{a:2},{a:3},{b:4}], function (err, r) {
       assert.equal(null, err)
       assert.equal(3, r.insertedCount) 
   })

//    collec.deleteMany({a:3}, function(err, r){
//        assert.equal(null, err)
//    })

  db.close()
 })
