import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import "./styles/ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
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

    const login = () => {
        navigate("/login");
    };

    const toggleProfileDropdown = () => {
        setProfileDropdownVisible(!profileDropdownVisible);
    };

    const handleProductClick = (product) => {
        navigate(`/product/${product._id}`, { state: { product } });
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/">All Products</a>
                </div>
                <div className="navbar-right">
                    <button onClick={toggleProfileDropdown}>Profile</button>
                    {profileDropdownVisible && (
                        <div className="profile-dropdown">
                            <p>Profile</p>
                            <p>Orders</p>
                            <p>Cart</p>
                            {user ? (
                                <p onClick={logout}>Logout</p>
                            ) : (
                                <p onClick={login}>Login</p>
                            )}
                        </div>
                    )}
                </div>
            </nav>
            <h1>Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product._id} onClick={() => handleProductClick(product)}>
                        <Product
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            numberInStock={product.countInStock}
                            imageUrl={product.imageUrl}
                            onAddToCart={() => addToCart(product)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
