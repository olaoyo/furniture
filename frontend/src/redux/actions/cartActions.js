import axios from "axios";
import API from "../../api/api";

import {
  CART_ADD_FURNITURE,
  CART_REMOVE_FURNITURE,
  CART_SAVE_SHIPPING_DETAILS,
  FURNITURE_INCREASE_QTY,
  FURNITURE_DECREASE_QTY,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const addFurnitureToCart = (furnitureId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(API.furniture.details(furnitureId));

  dispatch({
    type: CART_ADD_FURNITURE,
    payload: {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
};


export const removeFurnitureFromCart = (furnitureId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_FURNITURE, payload: furnitureId });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}


export const increaseFurnitureQty = (furnitureId) => (dispatch, getState) => {
  dispatch({ type: FURNITURE_INCREASE_QTY, payload: furnitureId });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


export const decreaseFurnitureQty = (furnitureId) => (dispatch, getState) => {
  dispatch({ type: FURNITURE_DECREASE_QTY, payload: furnitureId });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


export const saveShippingDetails = (data) => (dispatch) => {

  dispatch({ type: CART_SAVE_SHIPPING_DETAILS, payload: data });

  localStorage.setItem("shippingDetails", JSON.stringify(data));
};


export const savePaymentMethod = (data) => (dispatch) => {

  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

