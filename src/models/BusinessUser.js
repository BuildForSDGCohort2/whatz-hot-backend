//create mongoose model for business owners
const mongoose = require('mongoose');

var BusinessUser = mongoose.model('BusinessUser', {
    //model for Business owner login/register
    first_name: { type: String },
    last_name: { type: String },
    BusinessCategory: { type: String },
    BusinessName: { type: String },
    BusinessLocation: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    username: { type: String },
});

//export business user
module.exports = { BusinessUser };