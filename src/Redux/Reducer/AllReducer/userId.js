import * as actionType from "../../Actions/actionType";
import initialStates from '../initialStates';

function userId(state = initialStates.userId, action) {
  switch (action.type) {
    case actionType.USER_ID:
        return (action.payload)
    default:
        return state;
  }
}

export default userId;