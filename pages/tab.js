const express = require('express')
const tabapi = require('../api/tab');

const tabs = express.Router();
tabs.route("/tabs").get(tabapi.apiController)

module.exports = tabs;