const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const BusinessUsercontroller = require('./controllers/BusinessUsercontroller');
const Usercontroller = require('./controllers/Usercontroller');
const Reviewscontroller = require('./controllers/Reviewscontroller');
const { mongoose } = require('./db.js');


var app = express();
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());



app.listen(3000, () => console.log('server started successfully at port : 3000'));
app.use('/businessUsers', BusinessUsercontroller);
app.use('/users', Usercontroller);
app.use('/reviews', Reviewscontroller);