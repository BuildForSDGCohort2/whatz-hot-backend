const mongoose = require ('mongoose');

var User = mongoose.model ('User', {
    first_name : {type: String},
    last_name : {type: String},
    email : {type: String, required: true},
    password : {type: String, required: true},
    date: { type: Date, default: Date.now },
    username: { type: String},
});

module.exports = { User };