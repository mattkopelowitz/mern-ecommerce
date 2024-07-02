import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    
    const logout = () => {
        navigate("/");
        localStorage.setItem("user", null);
    }
    
    
    return (
        <div>
            <nav>
                <button onClick={logout}>Logout</button>
            </nav>
            <h1>Products</h1>
            {user.email}
        </div>
    );
};

export default ProductList;