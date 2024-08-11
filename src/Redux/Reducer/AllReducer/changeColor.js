import * as actionType from "../../Actions/actionType";
import initialStates from '../initialStates';

function changeColor(state = initialStates.color, action) {
  switch (action.type) {
    case actionType.CHANGE_COLOR_TO_DARK:
        return (action.payload)
    case actionType.CHANGE_COLOR_TO_WHITE:
        return (action.payload)
    default:
        return state;
  }
}

export default changeColor;