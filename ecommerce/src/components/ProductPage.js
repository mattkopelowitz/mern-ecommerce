import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/ProductPage.css";
import Cart from "./Cart";

const ProductPage = () => {
    const { state } = useLocation();
    const { product } = state;
    const [quantity, setQuantity] = useState(1);
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const addToCart = (product, quantity) => {
        setCart([...cart, { ...product, quantity }]);
    };

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };

    const closeCart = () => {
        setIsCartVisible(false);
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

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/">Store</a>
                </div>
                <div className="navbar-middle">
                    <a href="/">Products</a>
                </div>
                <div className="navbar-right">
                    <button onClick={toggleCart}>Cart ({cart.length})</button>
                    <button onClick={toggleProfileDropdown}>Profile</button>
                    {profileDropdownVisible && (
                        <div className="profile-dropdown">
                            <p onClick={toggleProfileDropdown}>Profile</p>
                            <p>Orders</p>
                            <p onClick={toggleCart && toggleProfileDropdown}>Cart</p>
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
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            max={product.numberInStock}
                            onClick={(e) => e.stopPropagation()}
                            disabled={product.numberInStock === 0}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product, quantity)
                            }}
                            disabled={product.numberInStock === 0}
                            className={product.numberInStock === 0 ? "out-of-stock" : "add-to-cart-button"}
                        >
                            {product.numberInStock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`cart-container ${isCartVisible ? 'show' : ''}`}>
                <Cart cart={cart} onClose={closeCart} />
            </div>
        </div>
    );
};

export default ProductPage;
