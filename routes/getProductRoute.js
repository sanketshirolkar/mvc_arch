const express = require("express");

const getProductRoute = express.Router();

const getproduct = require('../controllers/getproduct');

getProductRoute.get("/products", getproduct);

module.exports = getProductRoute;