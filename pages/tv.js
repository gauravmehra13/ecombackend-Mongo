const express = require('express')
const tvapi = require('../api/tv');

const tv = express.Router();
tv.route("/tv").get(tvapi.apiController)

module.exports = tv;