import axios from "axios";
import API from "../../api/api";

import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
} from "../constants/orderConstants";

import { CART_CLEAR_ITEMS, CART_CLEAR_PAYMENT_METHOD } from "../constants/cartConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });

    const { userLogin: { userInfo: { token } } } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(API.order, order, config);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });


    
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const resetOrder = () => (dispatch) => {

    dispatch({ type: ORDER_CREATE_RESET });
    
    dispatch({ type: CART_CLEAR_ITEMS });
    
    dispatch({ type: CART_CLEAR_PAYMENT_METHOD });
}