import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        console.log(`Adding ${product.name} to cart`);
        // Logic to add the product to the cart goes here
    };

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div>
            <nav>
                <button onClick={logout}>Logout</button>
            </nav>
            <h1>Products</h1>
            <div>
                {products.map((product) => (
                    <Product
                        key={product._id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        numberInStock={product.countInStock}
                        imageUrl={product.imageUrl}
                        onAddToCart={() => addToCart(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;

