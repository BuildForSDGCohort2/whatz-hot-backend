const mongoose = require('mongoose');

var BusinessUser = mongoose.model('BusinessUser', {
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

module.exports = { BusinessUser };