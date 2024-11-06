import * as actionType from "../../Actions/actionType";
import initialStates from '../initialStates';

function getWorkId(state = initialStates.workId, action) {
  switch (action.type) {
    case actionType.GET_WORK_ID:
        return (action.payload)
    default:
        return state;
  }
}

export default getWorkId;