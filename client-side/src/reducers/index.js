import { combineReducers } from 'redux'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import searchReducer from './searchReducer'
import favoritesReducer from './favoritesReducer'
const rootReducer = combineReducers({
  signupReducer,
  loginReducer,
  searchReducer,
  favoritesReducer
})

export default rootReducer;
