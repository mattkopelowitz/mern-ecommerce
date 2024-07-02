const Product = require("../models/Product");

// Create a Product
exports.createProduct = async (req, res) => {
    const { name, description, price, countInStock, imageUrl } = req.body;

    try {
        const product = new Product({ name, description, price, countInStock, imageUrl });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error creating new product");
    }
};


// Get All Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error getting products");
    }
};