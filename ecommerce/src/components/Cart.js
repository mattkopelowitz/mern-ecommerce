import React from "react";
import "./styles/Cart.css";

const Cart = ({ cart, onClose }) => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <button className="close-button" onClick={onClose}>Close</button>
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                <div className="item-details">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <p>{item.name} ({item.quantity})</p>
                        </div>
                    ))}
                </div>
                <div className="item-prices">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <p>${item.price * item.quantity}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="total-price">
                <p>Total Price: ${totalPrice}</p>
            </div>
            <button>Checkout</button>
        </div>
    );
};

export default Cart;
