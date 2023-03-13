import axios from "axios";
import API from "../../api/api";

import {
  FURNITURE_LIST_REQUEST,
  FURNITURE_LIST_SUCCESS,
  FURNITURE_LIST_FAIL,
  
  FURNITURE_DETAILS_REQUEST,
  FURNITURE_DETAILS_SUCCESS,
  FURNITURE_DETAILS_FAIL,
} from "../constants/furnitureConstants";

export const listFurnitures = () => async (dispatch) => {
  try {
    dispatch({ type: FURNITURE_LIST_REQUEST });

    const { data } = await axios.get(API.furniture.shop);

    dispatch({ type: FURNITURE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FURNITURE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const detailFurniture = (furnitureId) => async (dispatch) => {
  try {
    dispatch({ type: FURNITURE_DETAILS_REQUEST });

    const { data } = await axios.get(API.furniture.details(furnitureId));

    dispatch({ type: FURNITURE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FURNITURE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

