var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ship = new Schema ({
    name : String,
    missions : Number
});

module.exports = mongoose.model('ships', Ship);
