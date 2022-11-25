import { combineReducers } from "redux";
import { subReducer } from './subReducer'

const reducers = combineReducers({
    allSubs: subReducer,
})

export default reducers

