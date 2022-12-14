import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const initialState = {};

const middleware = [thunk];
const store = createStore(
  // Add reducers to the store
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
