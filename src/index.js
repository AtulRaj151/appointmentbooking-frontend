import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Component/App";
import { configureStore } from "./Store";
import { Provider } from "react-redux";
let store = configureStore();
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
