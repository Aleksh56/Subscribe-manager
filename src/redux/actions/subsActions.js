import { ActionTypes } from "../constants/actionTypes"


export const addSubs = (sub) => {
    return {
        type: ActionTypes.ADD_SUB,
        payload: sub
    }
}

export const deleteSubs = (sub) => {
    return {
        type: ActionTypes.REMOVE_SUB,
        payload: sub
    }
}

export const saveSubs = () => {
    return{
        type: ActionTypes.SAVE_SUBS
    }
}

export const setSubs = () => {
    return{
        type: ActionTypes.SET_SUBS
    }
}