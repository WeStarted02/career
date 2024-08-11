import { combineReducers } from "@reduxjs/toolkit";
import { changeBgColor, changeColor } from "./AllReducer";

const rootReducer = combineReducers({
  // All Reducers
  changeBgColor,
  changeColor,
});

export default rootReducer;
