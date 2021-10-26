'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const sequelize = new Sequelize(DATABASE_URL);


module.exports = {
  db: sequelize
}