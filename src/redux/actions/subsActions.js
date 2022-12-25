import { createAction } from "@reduxjs/toolkit"
import { ActionTypes } from "../constants/actionTypes"

export const addSubs = createAction(ActionTypes.ADD_SUB);
export const deleteSubs = createAction(ActionTypes.REMOVE_SUB);
export const saveSubs = createAction(ActionTypes.SAVE_SUBS);
export const setSubs = createAction(ActionTypes.SET_SUBS);
