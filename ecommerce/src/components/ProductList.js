import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import Cart from "./Cart";
import "./styles/ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

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

    const addToCart = (product, quantity) => {
        setCart([...cart, { ...product, quantity }]);
        product.numberInStock--;
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

    const handleProductClick = (product, event) => {
        if (
            event.target.tagName !== "BUTTON" &&
            event.target.tagName !== "INPUT"
        ) {
            navigate(`/product/${product._id}`, { state: { product } });
        }
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
                            <p>Profile</p>
                            <p>Orders</p>
                            <p onClick={toggleCart}>Cart</p>
                            {user ? (
                                <p onClick={logout}>Logout</p>
                            ) : (
                                <p onClick={login}>Login</p>
                            )}
                        </div>
                    )}
                </div>
            </nav>
            <div className="product-grid">
                {products.map((product) => (
                    <div
                        key={product._id}
                        onClick={(event) => handleProductClick(product, event)}
                    >
                        <Product
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            numberInStock={product.countInStock}
                            imageUrl={product.imageUrl}
                            onAddToCart={(quantity) => addToCart(product, quantity)}
                        />
                    </div>
                ))}
            </div>
            <div className={`cart-container ${isCartVisible ? 'show' : ''}`}>
                <Cart cart={cart} onClose={closeCart} />
            </div>
        </div>
    );
};

export default ProductList;
