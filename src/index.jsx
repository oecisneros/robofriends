import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
//import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import App from "./containers/App";
import * as Reducers from "./reducers";
import "./index.css";
import "tachyons";

const store = createStore(
  combineReducers({
    searchRobots: Reducers.searchRobots,
    requestRobots: Reducers.requestRobots,
  }),
  applyMiddleware(thunkMiddleware)
); //, createLogger()));

// https://coreui.io/blog/how-to-migrate-create-react-app-to-vite/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
