const express = require('express')
const Products = require('../api/all');

const all = express.Router();
all.route("/all").get(Products.apiController)

module.exports = all;