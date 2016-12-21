
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/wal')

var userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: { type: String, trim: true}
    },
    age: { type: Number, min:0}
})

 var PowerUser = mongoose.model('PowerUser', userSchema);

// var wallie = new PowerUser({
//     name : { first: 'mulu', last: 'abrham'},
//     age: 40
// })

// wallie.save(function(err, wal){
//     if(err) return console.error(err);

//     console.log(wal._id)
// })


 PowerUser.findOne({
     name:'mulu'
 }, function(err, res){
     if(err) console.log(err)
     else {
         console.log(res)
     }
 })