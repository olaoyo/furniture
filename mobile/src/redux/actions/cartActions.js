import axios from "axios";
import API from "../../api/api";

import {
  CART_ADD_FURNITURE,
  CART_REMOVE_FURNITURE,
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


export const increaseFurnitureQty = (furnitureId) => (dispatch) => {
  
  dispatch({ type: FURNITURE_INCREASE_QTY, payload: furnitureId })

};


export const decreaseFurnitureQty = (furnitureId) => (dispatch) => {

  dispatch({ type: FURNITURE_DECREASE_QTY, payload: furnitureId })

};