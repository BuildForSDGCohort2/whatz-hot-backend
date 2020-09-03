//import dependencies
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
var users = express.Router();

//import business user model 
var { BusinesssUser } = require('../models/BusinessUser');
users.use(cors())
process.env.SECRET_KEY = 'secret'

//create post request for new business owners to register account 
users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    BusinessCategory: req.body.BusinessCategory,
    BusinessName: req.body.BusinessName,
    BusinessLocation: req.body.BusinessLocation,
    email: req.body.email,
    password: req.body.password,
    created: today,
    username: req.body.username,
  }
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + ' registered' })
            })
            .catch(err => {
              res.send('error:' + err)
            })
        })
      } else {
        res.json({ error: 'The email address ' + req.body.email + ' is registered with an account' })
      }
    })
    .catch(err => {
      res.send('error:' + err)
    })
})

//create post request for already registered business owners to login into their accounts
users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            username: user.username,
            BusinessCategory: user.BusinessCategory,
            BusinessName: user.BusinessName,
            BusinessLocation: user.BusinessLocation,
          }
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