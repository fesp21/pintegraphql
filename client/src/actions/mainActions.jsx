import {createAction} from 'redux-actions'

const INCREASE_COUNTER = 'INCREASE_COUNTER'
const DECREASE_COUNTER = 'DECREASE_COUNTER'

const increaseCounter = createAction(INCREASE_COUNTER)
const decreaseCounter = createAction(DECREASE_COUNTER)

export const mainActionConstants = {
    INCREASE_COUNTER,
    DECREASE_COUNTER,
}
const mainActions = {
    increaseCounter,
    decreaseCounter,
}

export default mainActions
