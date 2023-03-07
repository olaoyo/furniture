import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage";

import { furnitureListReducer, furnitureDetailsReducer } from "../reducers/furnitureReducers";
import { cartReducer } from "../reducers/cartReducers"; 


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["cartItems"]
};


const reducer = combineReducers({
  furnitureList: furnitureListReducer,
  furnitureDetails: furnitureDetailsReducer,

  cart: persistReducer(persistConfig,cartReducer),
});


const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };

