var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema ({
    name : String,
    ships : [{type : Schema.Types.ObjectId, ref : 'ships'}]
});

module.exports = mongoose.model('users', User);
