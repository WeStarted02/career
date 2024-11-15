import * as actionTypes from "./actionType";
import initialState from "../Reducer/initialStates"

export function changeBgColorToDark() {
    return {
        type:actionTypes.CHANGE_BACKGROUND_TO_DARK,
        payload:initialState.bg_color
    }
}

export function changeBgColorToWhite() {
    return {
        type:actionTypes.CHANGE_BACKGROUND_TO_WHITE,
        payload:initialState.color
    }
}

export function changeColorToDark() {
    return {
        type:actionTypes.CHANGE_COLOR_TO_DARK,
        payload:initialState.color
    }
}

export function changeColorToWhite() {
    return {
        type:actionTypes.CHANGE_COLOR_TO_WHITE,
        payload:initialState.bg_color
    }
}
export function getWorkId(id) {
    return {
        type:actionTypes.GET_WORK_ID,
        payload:id
    }
}
export function userId(id) {
    return {
        type:actionTypes.USER_ID,
        payload:id
    }
}
export function workList(id) {
    return {
        type:actionTypes.WORK_LIST,
        payload:id
    }
}