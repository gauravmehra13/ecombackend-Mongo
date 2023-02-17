const express = require('express')
const smartapi = require('../api/smart');

const smartphones = express.Router();
smartphones.route("/smart").get(smartapi.apiController)

module.exports = smartphones;