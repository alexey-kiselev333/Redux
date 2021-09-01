import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";

import action from "./counter-actions"
console.log(action.increment.type)

export const valueReducer = createReducer(1,{
    [action.increment]:(state,{payload}) => state+payload,
    [action.decrement]:(state,{payload}) => state-payload
})


// export const valueReducer = (state = 1 ,{type,payload}) => {
//     switch(type){
//         case actionTypes.INCREMENT:
//             console.log(type);
//             return state + payload;
//
//
//         case actionTypes.DECREMENT:
//             return state - payload;
//
//         default:
//             return state;
//     }}

const stepReducer = (state = 2 ,action) =>state;

export default combineReducers({
    value: valueReducer,
    step: stepReducer,
});