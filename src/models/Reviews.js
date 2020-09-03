const mongoose = require ('mongoose');

var Reviews = mongoose.model('Reviews', {
    BusinessName: {type: String},
    BusinessLocation : {type: String},
    BusinessCategory : {type: String},
    username: { type: String },
    date: { type: Date, default: Date.now },
    Review: { type: String },
    Rating: { type: String }
});

module.exports = { Reviews };