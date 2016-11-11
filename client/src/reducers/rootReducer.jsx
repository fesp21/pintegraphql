import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import homeReducer from './modules/homeReducer'
import aboutReducer from './modules/aboutReducer'

const rootReducer = combineReducers({
    homeReducer,
    aboutReducer,
    routing: routerReducer,
})

export default rootReducer