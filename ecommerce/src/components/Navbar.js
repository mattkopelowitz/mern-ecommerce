import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/nav.css";

const Navbar = ({ cart, toggleCart, isCartVisible }) => {
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const toggleProfileDropdown = () => {
        setProfileDropdownVisible(!profileDropdownVisible);
    };

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    const login = () => {
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/">Store</a>
            </div>
            <div className="navbar-middle">
                <a href="/">Products</a>
            </div>
            <div className="navbar-right">
                <div className="icon-container">
                    <svg onClick={toggleCart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                    <svg onClick={toggleProfileDropdown} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                    </svg>
                </div>
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
    );
};

export default Navbar;