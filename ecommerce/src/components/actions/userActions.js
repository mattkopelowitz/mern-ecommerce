import axios from "axios";

// Register User
export const register = (name, email, password) => async (dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("api/users/register", { name, email, password }, config);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
};


// Login User
export const login = (email, password) => async (dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("api/users/login", { email, password }, config);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data});
    localStorage.setItem("userInfo", JSON.stringify(data));
};


// Logout User
export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: "USER_LOGOUT" });
};