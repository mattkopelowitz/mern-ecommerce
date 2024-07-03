import React from "react";
import "./styles/Product.css";

const Product = ({ name, description, price, numberInStock, imageUrl, onAddToCart, onProductClick }) => {
    return (
        <div className="product-card" onClick={onProductClick}>
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-card-content">
                <h3 className="product-name">{name}</h3>
                <h2 className="product-price">${price}</h2>
                <p className="product-stock">{numberInStock} Left</p>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart();
                    }}
                    disabled={numberInStock === 0}
                    className={numberInStock === 0 ? "out-of-stock" : "add-to-cart-button"}
                >
                    {numberInStock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                </button>
            </div>
        </div>
    );
};

export default Product;

