import { combineReducers } from "@reduxjs/toolkit";
import { changeBgColor, changeColor } from "./AllReducer";
import getWorkId from "./AllReducer/getWorkId";
import userId from "./AllReducer/userId";
import workList from "./AllReducer/workList";
const rootReducer = combineReducers({
  // All Reducers
  changeBgColor,
  changeColor,
  getWorkId,
  userId,
  workList
});

export default rootReducer;
