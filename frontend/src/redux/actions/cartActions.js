import axios from "axios";
import API from "../../api/api";

import {
  CART_ADD_FURNITURE,
  CART_REMOVE_FURNITURE,
  FURNITURE_INCREASE_QTY,
  FURNITURE_DECREASE_QTY,
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


export const increaseFurnitureQty = (furnitureId) => (dispatch, getState) => {
  dispatch({ type: FURNITURE_INCREASE_QTY, payload: furnitureId });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


export const decreaseFurnitureQty = (furnitureId) => (dispatch, getState) => {
  dispatch({ type: FURNITURE_DECREASE_QTY, payload: furnitureId });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

