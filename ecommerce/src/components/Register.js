import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Auth.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://mern-ecommerce-backend-tan.vercel.app/api/users/register", { email, password });
            navigate("/login");
        } catch (err) {
            console.error("Registration failed", err);
            alert("Registration failed");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Register</h1>
                <form onSubmit={register}>
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
                    <button type="submit">Register</button>
                </form>
                <a href="/login">Already have an account?</a>
            </div>
        </div>
    );
};

export default Register;