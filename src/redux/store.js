
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import counterReducer from './counter/counter-reducer'
import {logger} from "redux-logger/src";


console.log(getDefaultMiddleware(),logger)






const middleware = [...getDefaultMiddleware(),logger]
// const store = createStore(rootReducer,composeWithDevTools());



const store = configureStore({
    reducer: {counter:counterReducer},
    middleware:middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export default store;