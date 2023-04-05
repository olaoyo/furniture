import axios from "axios";
import API from "../../api/api";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
} from "../constants/userConstants";

import { 
  CART_CLEAR_ITEMS, 
  CART_CLEAR_SHIPPING_DETAILS, 
  CART_CLEAR_PAYMENT_METHOD 
} from "../constants/cartConstants";


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      API.auth.login,
      { username: email, password: password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  
  localStorage.removeItem("userInfo");
  
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingDetails");
  localStorage.removeItem("paymentMethod");

  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_PROFILE_RESET });

  dispatch({ type: CART_CLEAR_ITEMS });
  dispatch({ type: CART_CLEAR_SHIPPING_DETAILS });
  dispatch({ type: CART_CLEAR_PAYMENT_METHOD });
};

export const register = (name, surname, email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        API.auth.register,
        { name: name, surname: surname, email: email, password: password },
        config
      );

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      // Login user automatically after registration
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserProfile = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST });

    const { userLogin: { userInfo: { token } } } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(API.auth.profile(id), config);

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });

    
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
