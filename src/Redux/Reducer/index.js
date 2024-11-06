import { combineReducers } from "@reduxjs/toolkit";
import { changeBgColor, changeColor } from "./AllReducer";
import getWorkId from "./AllReducer/getWorkId";
import userId from "./AllReducer/userId";
const rootReducer = combineReducers({
  // All Reducers
  changeBgColor,
  changeColor,
  getWorkId,
  userId
});

export default rootReducer;
