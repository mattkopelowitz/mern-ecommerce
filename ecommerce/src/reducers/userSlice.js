import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: null
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        }
    }
})