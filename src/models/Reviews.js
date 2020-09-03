//create mongoose model for customer reviews
const mongoose = require('mongoose');

var Reviews = mongoose.model('Reviews', {
    //create review model for customers

    BusinessName: {type: String},
    BusinessLocation : {type: String},
    BusinessCategory : {type: String},
    username: { type: String },
    date: { type: Date, default: Date.now },
    Review: { type: String },
    Rating: { type: String }
});

//export reviews
module.exports = { Reviews };