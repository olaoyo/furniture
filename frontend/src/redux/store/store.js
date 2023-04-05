import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { furnitureListReducer, furnitureDetailsReducer } from "../reducers/furnitureReducers";
import { cartReducer } from "../reducers/cartReducers";
import { userLoginReducer, userRegisterReducer, userProfileReducer } from "../reducers/userReducers";
import { orderCreateReducer } from "../reducers/orderReducers";

const reducer = combineReducers({
    furnitureList: furnitureListReducer,
    furnitureDetails: furnitureDetailsReducer, 

    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,

    orderCreate: orderCreateReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

const shippingDetailsFromStorage = localStorage.getItem("shippingDetails") ? JSON.parse(localStorage.getItem("shippingDetails")) : {};

const paymentMethodFromStorage = localStorage.getItem("paymentMethod") ? JSON.parse(localStorage.getItem("paymentMethod")) : {};

const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingDetails: shippingDetailsFromStorage, paymentMethod: paymentMethodFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store
