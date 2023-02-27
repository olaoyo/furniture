import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { furnitureListReducers, furnitureDetailsReducer } from "../reducers/furnitureReducers";

const reducer = combineReducers({
    furnitureList: furnitureListReducers,
    furnitureDetails: furnitureDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store
