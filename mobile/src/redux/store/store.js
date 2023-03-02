import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  furnitureListReducer,
  furnitureDetailsReducer,
} from "../reducers/furnitureReducers";
import { cartReducer } from "../reducers/cartReducers"; 

import AsyncStorage from "@react-native-async-storage/async-storage";

const reducer = combineReducers({
  furnitureList: furnitureListReducer,
  furnitureDetails: furnitureDetailsReducer,

  cart: cartReducer,
});

const cartItemsFromStorage = async () => {
  (await AsyncStorage.getItem("cartItems")) ? JSON.parse("cartItems") : [];
};

const initialState = {
  cart: { cartItems: cartItemsFromStorage() },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
