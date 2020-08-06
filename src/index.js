import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  count: 0,
  color: "green",
  colorText: "",
  boxColors: [null],
};

function reducer(state = initialState, action) {
  //switch case
  switch (action.type) {
    case "INCREMENT":
      state.count++;
      if (state.count > 10) {
        state.colorText = "yellow";
      } else {
        state.colorText = "red";
      }
      break;
    case "DECREMENT":
      state.count--;
      if (state.count <= 0) {
        state.count = 0;
      }
      if (state.count > 10) {
        state.colorText = "yellow";
      } else {
        state.colorText = "red";
      }
      break;
    case "RESET":
      state.count = 0;
      break;
    case "COLOR":
      state.color = action.payload;
      break;
    case "CHANGE_NUM_BOX":
      console.log("hehe", action.payload);
      state.count = action.payload;
      if (state.count > 10) {
        state.colorText = "yellow";
      } else {
        state.colorText = "red";
      }
      break;
    case "CHANGECOLORBTN":
      const boxColors = state.boxColors;
      boxColors[action.payload.id] = action.payload.color;
      console.log("hihi",action.payload.color)
      console.log("hihi",action.payload.number)
      break;
    default:
      console.log("Default is here");
  }

  console.log("count", state.count);
  return { ...state }; //copy value of state and make new state
}
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
