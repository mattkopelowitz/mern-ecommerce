import axios from "axios";
import { PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_SUCCESS } from "../../constants/productConstants";

// Fetch Products
export const listProducts = () => async (dispatch) => {
    const { data } = await axios.get("api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data});
};


// Fetch Product Details
export const listProductDetails = (id) => async (dispatch) => {
    const { data } = await axios.get(`api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data});
};