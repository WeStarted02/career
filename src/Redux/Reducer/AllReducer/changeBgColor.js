import * as actionType from "../../Actions/actionType";
import initialStates from '../initialStates';

function changeBgColor(state = initialStates.bg_color, action) {
  switch (action.type) {
    case actionType.CHANGE_BACKGROUND_TO_DARK:
        return (action.payload)
    case actionType.CHANGE_BACKGROUND_TO_WHITE:
        return (action.payload)
    default:
        return state;
  }
}

export default changeBgColor