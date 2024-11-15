import * as actionType from "../../Actions/actionType";
import initialStates from '../initialStates';

function workList(state = initialStates.workList, action) {
  switch (action.type) {
    case actionType.WORK_LIST:
        return (action.payload)
    default:
        return state;
  }
}

export default workList;