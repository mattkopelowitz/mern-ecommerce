import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../../constants/cartConstants";
import axios from "axios";

// Add to cart
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`api/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            price: data.price,
            imageUrl: data.imageUrl,
            countInStock: data.countInStock,
            qty,
        },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


// Remove from cart
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id});
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};