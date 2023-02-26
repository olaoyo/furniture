import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { furnitureListReducer } from "../reducers/furnitureReducers";

const reducer = combineReducers({
    furnitureList: furnitureListReducer
});

const initialState = {};

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store
