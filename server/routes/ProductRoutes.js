const express = require("express");
const router = express.Router();
const { createProduct, getProducts } = require("../controllers/ProductController");

// Create a Product
router.post("/", createProduct);

// Get All Products
router.get("/", getProducts);

module.exports = router;