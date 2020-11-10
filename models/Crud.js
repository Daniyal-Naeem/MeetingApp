const mongoose = require('mongoose');
const {check, validationResult} = require('express-validator');
const auth = require("../middleware/auth");
const User = require('./User');
const Crud = require('../models/Crud');

const CrudSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  classname: {
    type: String,
    required: true
  },
  classid: {
    type: String,
    required: true
  },
 
  type: {
    type: String,
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('crud', CrudSchema);