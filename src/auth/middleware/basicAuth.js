'use strict';

const base64 = require('base-64');
const { auth } = require('../models/user-model.js');

async function headers(req, res) {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');
  try {
    auth(username, password, req);
  } catch (error) {
    console.log(error);
    res.status(403).send('Invalid Login Attempt');
  }
}

module.exports = headers;