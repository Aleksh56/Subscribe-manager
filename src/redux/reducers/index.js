import { combineReducers } from "redux";
import { salaryReducer } from "./salaryReducer";
import { subReducer } from './subReducer'

const reducers = combineReducers({
    allSubs: subReducer,
    yourSalary: salaryReducer,
})

export default reducers

