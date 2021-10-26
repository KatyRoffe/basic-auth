'use strict';

const express = require('express');
const router = express.Router();
const { Users } = require('./models/userModel.js');
const basicAuth = require('./middleware/basicAuth.js');

router.post('/signup', createSignup);

async function createSignup(req, res) {
  try {
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
  }
  catch (error) {
    console.log(error);
    res.status(403).send('Error: could not create user');
  }
}

router.post('/signin', basicAuth, createSignin);

async function createSignin(req, res, next) {
  console.log(req.user);
  res.send('Welcome! You are signed in!');
}

module.exports = router;