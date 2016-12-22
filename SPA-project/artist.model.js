

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
    name: String,
    Album: String
});

module.exports = mongoose.model('Artist', ArtistSchema)