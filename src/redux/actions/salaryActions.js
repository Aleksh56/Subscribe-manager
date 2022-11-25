import { ActionTypes } from "../constants/actionTypes"

export const changeSalary = (value) => {
    return{
        type: ActionTypes.CHANGE_SALARY,
        payload: value
    }
}

export const saveSalary = () => {
    return{
        type: ActionTypes.SAVE_SALARY
    }
}

export const setSalary = () => {
    return{
        type: ActionTypes.SET_SALARY
    }
}