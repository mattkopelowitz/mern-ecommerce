import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase("USER_LOGIN_SUCCESS", (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        });
        builder.addCase("USER_LOGOUT", (state) => {
            state.user = null;
            state.isLoggedIn = false;
        });
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
