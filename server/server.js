const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");
const cors = require("cors")

// Load environment variables from .env file
dotenv.config();

// Connect to the db
connectDB();

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: ["https://mern-ecommerce-backend-tan.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));