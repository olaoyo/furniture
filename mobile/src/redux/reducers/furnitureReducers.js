import {
  FURNITURE_LIST_REQUEST,
  FURNITURE_LIST_SUCCESS,
  FURNITURE_LIST_FAIL,
} from "../constants/furnitureConstants";

export const furnitureListReducers = (state = { furnitures: [] }, action) => {
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
