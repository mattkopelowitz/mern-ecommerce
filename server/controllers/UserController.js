const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    
    try { // Determine if email is already in use
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user and hash their password
        user = new User({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) {
                throw err;
            }
            res.json({ token });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error registering user");
    }
};


// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try { // Determine if user exists with inputted email
        let user = await User.findOne({ email });
        if (!user) {
           return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) {
                throw err;
            }
            res.json({ token });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error logging in user");
    }
};