import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import thunk from "redux-thunk";

const initialStore = {};
const middlewares = [thunk];
const store = createStore(
  reducers,
  initialStore,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
