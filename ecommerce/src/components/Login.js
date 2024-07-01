import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginAction(email, password));
        navigate("/products");
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
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
