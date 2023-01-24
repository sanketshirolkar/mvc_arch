const express = require("express");
const productAddRoute = express.Router();
const addpro = require("../controllers/productadd");
productAddRoute.post("/new",addpro);
module.exports = productAddRoute;