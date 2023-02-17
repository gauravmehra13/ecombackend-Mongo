const express = require('express')
const watchapi = require('../api/watches');

const watches = express.Router();
watches.route("/watch").get(watchapi.apiController)

module.exports = watches;