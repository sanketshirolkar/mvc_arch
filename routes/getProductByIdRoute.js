const express = require("express");

const getProductsByIdRoute = express.Router();

const getproductsbyid = require('../controllers/getproductbyid');

getProductsByIdRoute.get("/id/:id", getproductsbyid);

module.exports = getProductsByIdRoute;