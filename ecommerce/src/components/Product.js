import React, { useState } from "react";
import "./styles/Product.css";

const Product = ({ name, description, price, numberInStock, imageUrl, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-card-content">
                <h3 className="product-name">{name}</h3>
                <h2 className="product-price">${price}</h2>
                <p className="product-stock">{numberInStock} Left</p>
                <div className="add-to-cart-section">
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
                        max={numberInStock}
                        onClick={(e) => e.stopPropagation()}
                        disabled={numberInStock === 0}
                    />
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(quantity);
                        }}
                        disabled={numberInStock === 0}
                        className={numberInStock === 0 ? "out-of-stock" : "add-to-cart-button"}
                    >
                        {numberInStock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
