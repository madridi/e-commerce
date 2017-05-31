const express = require('express');
const http = require('http');
const mongooseConnection = require('./config/mongoose');
const application = express();

mongooseConnection();

require('./config/application')(application);

application.use(express.static('./frontend'));

const  res = require('./backend/lib/models/user.model');

module.exports = server;
