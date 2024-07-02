import React from "react";

const Product = ({ name, description, price, numberInStock, imageUrl, onAddToCart }) => {
    return (
        <div>
            <img src={imageUrl}/>
            <h1>{name} ${price}</h1>
            <p>{description}</p>
            {numberInStock > 0 ? (
                <div>
                    <p>{numberInStock} Left!</p>
                    <button onClick={onAddToCart}>Add to Cart</button>
                </div>
            ) : (
                <button disabled>Out of Stock</button>
            )}
        </div>
    );
};

export default Product;
