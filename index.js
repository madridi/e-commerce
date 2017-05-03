const express = require('express');
const application = express();

require('./config/application')(application);

module.exports = application;