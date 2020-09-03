//create mongoose model for registered users
const mongoose = require('mongoose');

var User = mongoose.model('User', {
    //create user model for login/register
    first_name : {type: String},
    last_name : {type: String},
    email : {type: String, required: true},
    password : {type: String, required: true},
    date: { type: Date, default: Date.now },
    username: { type: String},
});

//export user
module.exports = { User };