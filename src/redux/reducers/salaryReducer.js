import {ActionTypes} from '../constants/actionTypes'


const initialState = {
    salary: 230
}

export const salaryReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.CHANGE_SALARY:
            return {salary: payload}
        case ActionTypes.SAVE_SALARY:
            localStorage.setItem('salary', JSON.stringify(state))
            return state
        case ActionTypes.SET_SALARY:
            const savedData = JSON.parse(localStorage.getItem('salary') || 123)
            return {salary: savedData.salary}
        default:
            return state
    }
}