import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:5000/api/users/register", { email, password });
            navigate("/login");
        } catch (err) {
            console.error("Registration failed", err);
            alert("Registration failed");
        }
    };

    return (
        <div>
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
        </div>
    );
};

export default Register;