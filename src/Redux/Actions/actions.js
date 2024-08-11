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