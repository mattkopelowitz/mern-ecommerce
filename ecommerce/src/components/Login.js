import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Auth.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("https://mern-ecommerce-backend-tan.vercel.app/api/users/login", { email, password });
            dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
            localStorage.setItem("user", JSON.stringify({email: data.data.email}));
            localStorage.setItem("isLoggedIn", true);
            navigate("/products");
        } catch (err) {
            console.error("Login failed", err);
            alert("Incorrect email or password");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Login</h1>
                <form onSubmit={login}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />{" "}
                    <br />
                    <button type="submit">Login</button>
                </form>
                <a href="/register">Don't have an account?</a>
            </div>
        </div>
    );
};

export default Login;

