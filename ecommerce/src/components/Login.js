import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { login } from "../../redux/actions/userActions";

const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const dispatch = useDispatch();
    // const userLogin = useSelector((state) => state.userLogin);
    //const { loading, error, userInfo } = userLogin;

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(login(email, password));
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input> <br></br>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input> <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;