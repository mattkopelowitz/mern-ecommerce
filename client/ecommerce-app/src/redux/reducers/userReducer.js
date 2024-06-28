import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../../constants/userConstants";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};