import {createStore} from "redux";

import {valueReducer} from './counter/counter-reducer'

const store = createStore(valueReducer);



// const store = configureStore({
//     reducer: {counter:counterReducer},
//     middleware:middleware,
//     devTools: process.env.NODE_ENV === 'development',
// })

export default store;