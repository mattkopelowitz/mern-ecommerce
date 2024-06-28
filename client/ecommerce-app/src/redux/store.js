import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});

// Configure store with Redux DevTools integration
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
