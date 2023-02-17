const express = require('express')
const accapi = require('../api/accessories');

const accessories = express.Router();
accessories.route("/acc").get(accapi.apiController)

module.exports = accessories;