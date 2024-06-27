const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/UserController");

// Register a User
router.post("/register", registerUser);

// Login a User
router.post("/login", loginUser);

module.exports = router;