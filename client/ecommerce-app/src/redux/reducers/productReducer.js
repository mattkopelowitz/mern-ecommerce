import { PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_SUCCESS } from "../../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        default:
            return state;
    }
};