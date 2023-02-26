import axios from "axios";
import API from "../../api/api";

import {
  FURNITURE_LIST_REQUEST,
  FURNITURE_LIST_SUCCESS,
  FURNITURE_LIST_FAIL,
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
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

