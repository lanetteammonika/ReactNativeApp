import { combineReducers } from 'redux'
import auth from './authReducers/authReducer'

const rootReducer = combineReducers({
    auth
})

export default rootReducer