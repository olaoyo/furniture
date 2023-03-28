import axios from "axios";
import API from "../../api/api";

import {
  CART_ADD_FURNITURE,
  CART_REMOVE_FURNITURE,
  CART_SAVE_SHIPPING_DETAILS,
  FURNITURE_INCREASE_QTY,
  FURNITURE_DECREASE_QTY,
} from "../constants/cartConstants";
 
export const addFurnitureToCart = (furnitureId, qty) => async (dispatch) => {
  
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
  };


export const removeFurnitureFromCart = (furnitureId) => (dispatch) => {
  dispatch({ type: CART_REMOVE_FURNITURE, payload: furnitureId });
};


export const increaseFurnitureQty = (furnitureId) => (dispatch) => {
  
  dispatch({ type: FURNITURE_INCREASE_QTY, payload: furnitureId });

};


export const decreaseFurnitureQty = (furnitureId) => (dispatch) => {

  dispatch({ type: FURNITURE_DECREASE_QTY, payload: furnitureId });

};


export const saveShippingDetails = (data) => (dispatch) => {

  dispatch({ type: CART_SAVE_SHIPPING_DETAILS, payload: data });

};

