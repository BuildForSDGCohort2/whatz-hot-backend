//install dependencies 
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
//assign variable name to express router
var users = express.Router();

//import user model for registered users
var { User } = require('../models/User');
users.use(cors())
//secret key should be moved to segregated file before production, secret value should be chanded.
process.env.SECRET_KEY = 'secret'


//create post request and allow new users register
users.post('/register', (req, res) => {
  const today = new Date()
  //create user data
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
    username: req.body.username,
  }
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      //ensure user email is unique, avoid re-registering emails
      if (!user) {
        //hash password
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          //create user only when email is unique
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + ' registered' })
            })
            //catch error
            .catch(err => {
              res.send('error:' + err)
            })
        })//throw error if user email is non-unique and has been registered into the system
      } else {
        res.json({ error:  'The email address ' + req.body.email + ' is registered with an account' })
      }
    })//catch error
    .catch(err => {
      res.send('error:' + err)
    })
})

//create post request to allow users login into their accounts.
users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      //compare user email to ensure it is registered in the system
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            //retrieve user payload data if user is registered
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            username: user.username
          }
          //sign token with user payload data and secret key
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send({ token, payload })
        } else {
          res.json({ error: 'your email and password combination is wrong' })
        }
      } else {
        res.json({ error: 'your email and password combination is wrong' })
      }
    })
    .catch(err => {
      res.send('error:' + err)
    })
})

module.exports = users;