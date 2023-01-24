const express = require("express");
const getProductsByNameRoute = express.Router();
const getproductsbyname = require("../controllers/getproductsbyname");
getProductsByNameRoute.get("/name/:name",getproductsbyname);
module.exports = getProductsByNameRoute;