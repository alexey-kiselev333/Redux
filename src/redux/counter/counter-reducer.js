import {combineReducers} from "redux";
import actionTypes from './counter-types'

export const valueReducer = (state = 1 ,{type,payload}) => {
    switch(type){
        case actionTypes.INCREMENT:
            console.log(type);
            return state + payload;


        case actionTypes.DECREMENT:
            return state - payload;

        default:
            return state;
    }}

const stepReducer = (state = 2 ,action) =>state;

export default combineReducers({
    value: valueReducer,
    step: stepReducer,
});