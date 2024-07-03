import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import "./styles/ProductPage.css";

const ProductPage = () => {
    const { state } = useLocation();
    const { product } = state;
    const [quantity, setQuantity] = useState(1);
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const cart = Cart;

    const addToCart = () => {
        console.log(`Adding ${quantity} of ${product.name} to cart`);
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

    const toggleCart = () => {
       
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/">All Products</a>
                </div>
                <div className="navbar-right">
                    <button onClick={toggleCart}>Cart</button>
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
        <div className="product-page">
            <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-details">
                <h1>{product.name}</h1>
                <p className="product-price">${product.price}</p>
                <div className="stock-info">
                    <span className="stock-box">{product.countInStock} in stock</span>
                </div>
                <p>{product.description}</p>
                <div className="add-to-cart-section">
                    <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        min="1" 
                        max={product.countInStock}
                        disabled={product.countInStock === 0}
                    />
                    <button
                    disabled={product.countInStock === 0}
                    onClick={addToCart}
                    className={product.countInStock === 0 ? "out-of-stock" : "add-to-cart-button"}
                >
                    {product.countInStock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductPage;
