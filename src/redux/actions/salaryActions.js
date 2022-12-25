import { createAction } from "@reduxjs/toolkit"
import { ActionTypes } from "../constants/actionTypes"

export const changeSalary = createAction(ActionTypes.CHANGE_SALARY);
export const saveSalary = createAction(ActionTypes.SAVE_SALARY);
export const setSalary = createAction(ActionTypes.SET_SALARY);
