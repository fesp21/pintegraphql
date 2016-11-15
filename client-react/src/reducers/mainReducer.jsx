import {mainActionConstants} from '../actions/mainActions'

const mainReducer = (state = 0, action) => {
    switch (action.type) {
        case mainActionConstants.INCREASE_COUNTER:
            return {
                ...state,
                counter : state.counter + 1
            }
        case mainActionConstants.DECREASE_COUNTER:
            return {
                ...state,
                counter : state.counter - 1
            }
        default:
            return state;
    }
}
export default mainReducer