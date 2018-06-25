import { combineReducers } from 'redux'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  signupReducer,
  loginReducer,
  searchReducer
})

export default rootReducer;
