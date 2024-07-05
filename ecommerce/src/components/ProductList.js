import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import Cart from "./Cart";
import Navbar from "./Navbar";
import "./styles/ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
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

    const addToCart = (product, quantity) => {
        setCart([...cart, { ...product, quantity }]);
    };

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };

    const closeCart = () => {
        setIsCartVisible(false);
    };

    const handleProductClick = (product, event) => {
        if (event.target.tagName !== "BUTTON" && event.target.tagName !== "INPUT") {
            navigate(`/product/${product._id}`, { state: { product } });
        }
    };

    return (
        <div>
            <Navbar cart={cart} toggleCart={toggleCart} isCartVisible={isCartVisible} />
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product._id} onClick={(event) => handleProductClick(product, event)}>
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
