//importing dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//importing controller files
const BusinessUsercontroller = require('./controllers/BusinessUsercontroller');
const Usercontroller = require('./controllers/Usercontroller');
const Reviewscontroller = require('./controllers/Reviewscontroller');

//import database for local developement, must be changed before deploy
const { mongoose } = require('./db.js');


var app = express();
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());


//this should run from localhost, controllers and models should run properly on localhost with no error
app.listen(3000, () => console.log('server started successfully at port : 3000'));

//getting routes from imports with expressRouter
app.use('/businessUsers', BusinessUsercontroller);
app.use('/users', Usercontroller);
app.use('/reviews', Reviewscontroller);