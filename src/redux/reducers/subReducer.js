import {ActionTypes} from '../constants/actionTypes'


const initialState = {
    subs: [{
        _id: 1,
        title: "Netflix",
        monthly: 13.67,
        payment: 24,
        color: "red"
    },
    {
        _id: 2,
        title: "Yandex.Music",
        monthly: 3.68,
        payment: 3,
        color: "amber"
    },
    {
        _id: 3,
        title: "Youtube+",
        monthly: 1.68,
        payment: 3,
        color: "red"
    },
    {
        _id: 4,
        title: "VK.Music",
        monthly: 27.68,
        payment: 3,
        color: "sky"
    }]
}

export const subReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_SUB:
            return {...state, subs: [...state.subs, payload]}
        case ActionTypes.REMOVE_SUB:
            const newState = {subs: state.subs.filter(item => item._id !== payload)}
            return newState
        default:
            return state
    }
}