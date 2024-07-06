import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/ProductPage.css";
import Cart from "./Cart";
import Navbar from "./Navbar";

const ProductPage = () => {
    const { state } = useLocation();
    const { product } = state;
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const addToCart = (product, quantity) => {
        setCart([...cart, { ...product, quantity }]);
        product.countInStock -= quantity;
    };

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };

    const closeCart = () => {
        setIsCartVisible(false);
    };

    return (
        <div>
            <Navbar cart={cart} toggleCart={toggleCart} isCartVisible={isCartVisible} />
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
                            max={product.countInStock}
                            onClick={(e) => e.stopPropagation()}
                            disabled={product.countInStock === 0}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product, quantity)
                            }}
                            disabled={product.countInStock === 0}
                            className={product.countInStock === 0 ? "out-of-stock" : "add-to-cart-button"}
                        >
                            {product.countInStock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
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
