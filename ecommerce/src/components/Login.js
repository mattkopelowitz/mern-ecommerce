import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:5000/api/users/login", { email, password });
            dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
            localStorage.setItem("user", JSON.stringify({email: data.data.email}));
            navigate("/products");
        } catch (err) {
            console.error("Login failed", err);
            alert("Incorrect email or password");
        }
    };

    return (
        <div>
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
        </div>
    );
};

export default Login;

