const express = require("express");
const getProductsByCategoryRoute = express.Router();
const getproductsbycategory = require("../controllers/getproductsbycategory");
getProductsByCategoryRoute.get("/category/:category",getproductsbycategory);
module.exports=getProductsByCategoryRoute;