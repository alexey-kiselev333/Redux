import actionTypes from './counter-types'

export const increment = value => ({
    type:'counter/Increment',
    payload: value,
})

export const decrement = value => ({
    type:actionTypes.DECREMENT,
    payload: value,
})
export default {increment,decrement}