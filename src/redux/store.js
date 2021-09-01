
import {configureStore, getDefaultMiddleware,combineReducers} from "@reduxjs/toolkit";
import counterReducer from './counter/counter-reducer'
import {logger} from "redux-logger/src";
import { persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

console.log(getDefaultMiddleware(),logger)



const todosPersistConfig = {
    key:'root',
    storage,
}




const middleware = [...getDefaultMiddleware(),logger]
// const store = createStore(rootReducer,composeWithDevTools());




const store = configureStore({
    reducer: {
        counter:persistReducer(todosPersistConfig,counterReducer)
    },
    middleware:middleware,
    devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)

export default {store,persistor};