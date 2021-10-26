'use strict';

const express = require('express');
const userRouter = require('./auth/routes.js');

const app = express();

app.use(express.json());

app.use(userRouter);

// app.use(express.urlencoded({ extended: true }));
// i don't think i made use of this one


module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('Up and running on port', PORT));
  }
}