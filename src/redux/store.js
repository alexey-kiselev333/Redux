import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import counterReducer from './counter/counter-reducer'
import {valueReducer} from "./counter/counter-reducer";

const rootReducer = combineReducers({
    counter:counterReducer,
})

const store = createStore(rootReducer,composeWithDevTools());

export default store;