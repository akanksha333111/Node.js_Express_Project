// movieModel.js

var mongoose = require('mongoose');

// Setup schema
var movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    summary: String,
});

// Export Movie model
var Movie = module.exports = mongoose.model('movie', movieSchema);

module.exports.get = function (callback, limit) {
    Movie.find(callback).limit(limit);
}