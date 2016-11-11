import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import homeReducer from './homeReducer'
import detailReducer from './detailReducer'
import mainReducer from './mainReducer'

const rootReducer = combineReducers({
    homeReducer,
    detailReducer,
    mainReducer,
    routing: routerReducer,
})

export default rootReducer