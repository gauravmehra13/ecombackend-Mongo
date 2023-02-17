const express = require('express')
const galaxybookapi = require('../api/accessories');

const galaxybook = express.Router();
galaxybook.route("/book").get(galaxybookapi.apiController)

module.exports = galaxybook;