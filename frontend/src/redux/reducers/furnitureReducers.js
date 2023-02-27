import {
  FURNITURE_LIST_REQUEST,
  FURNITURE_LIST_SUCCESS,
  FURNITURE_LIST_FAIL,

  FURNITURE_DETAILS_REQUEST,
  FURNITURE_DETAILS_SUCCESS,
  FURNITURE_DETAILS_FAIL,
} from "../constants/furnitureConstants";


export const furnitureListReducer = (state = { furnitures: [] }, action) => {
  switch (action.type) {
    case FURNITURE_LIST_REQUEST:
      return { loading: true, furnitures: [] };

    case FURNITURE_LIST_SUCCESS:
      return { loading: false, furnitures: action.payload };

    case FURNITURE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const furnitureDetailsReducer = (state = { furniture: { reviews: [] } }, action) => {
  switch (action.type) {
    case FURNITURE_DETAILS_REQUEST:
      return { loading: true, ...state };

    case FURNITURE_DETAILS_SUCCESS:
      return { loading: false, furniture: action.payload };

    case FURNITURE_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
