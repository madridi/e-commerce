const mongoose = require('mongoose');
const CONSTANTS = require('./../backend/constants');

module.exports = function() {
  const db = mongoose.connect(CONSTANTS.MONGODB.URI);

  return db;
};