import {combineReducers} from "redux";

import actionTypes from "./counter-types"

const initialState = {counterValue:0}

export const valueReducer = (state = initialState ,{type,payload}) => {
    switch(type){
        case actionTypes.INCREMENT:
            return { counterValue:state.counterValue + payload };


        case 'counter/Decrement':
            return { counterValue:state.counterValue - payload };

        default:
            return state;
    }}

const stepReducer = (state = 2 ) =>state;

export default combineReducers({
    value: valueReducer,
    step: stepReducer,
});