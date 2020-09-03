//import dependencies
const express = require('express');
var router = express.Router();

//import Reviews model
var {Reviews} = require('../models/Reviews');

//create get request to retrieve users
router.get('/', (req, res) => {
  Reviews.find ((err, docs) => {
       if (!err) {res.send(docs);}
       else {console.log ('Error in retrieving reviews:' + JSON.stringify(err, undefined, 2)); }
     })
});

//create post request to allow users post new reviews
router.post('/', (req, res) => {
  const today = new Date()
  var Rev = new Reviews({
    //get review information from forms
    BusinessName : req.body.BusinessName,
    BusinessLocation: req.body.BusinessLocation,
    BusinessCategory: req.body.BusinessCategory,
    description: req.body.description,
    username: req.body.username,
    Review: req.body.Review,
    created: today,
  });
  //save reviews
  Rev.save ((err, doc) => {
    if (!err) {res.send(doc);}
    else {console.log ('Error in saving Review:' + JSON.stringify(err, undefined, 2)); }
  });
});

//create get request to get single review by id
router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
  return res.status(400).send('no record with given id: $(req.params.id)')

  Reviews.findById(req.params.id, (err, doc) => {
    if (!err) {res.send(doc);}
    else {console.log ('Error in retrieving Review:' + JSON.stringify(err, undefined, 2)); }
  });
});

//create get request to get reviews by business name
router.get('/1/:BusinessName', (req, res) => {
  Reviews.find({ BusinessName: req.params.BusinessName }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving Business Review:' + JSON.stringify(err, undefined, 2)); }
  });
});

//create get request to get reviews by business location
router.get('/2/:BusinessLocation', (req, res) => {
  Reviews.find({ BusinessLocation: req.params.BusinessLocation }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving Business Reviews in this location:' + JSON.stringify(err, undefined, 2)); }
  });
});

//create get request to get reviews by business category
router.get('/3/:BusinessCategory', (req, res) => {
  Reviews.find({ BusinessCategory: req.params.BusinessCategory }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retrieving Business Reviews in this category:' + JSON.stringify(err, undefined, 2)); }
  });
});

//export express router
module.exports = router;