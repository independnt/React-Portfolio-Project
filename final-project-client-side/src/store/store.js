import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from '../reducers';
import { rootReducer } from '../reducers/index'

const middleware = applyMiddleware(promise(), thunk)

export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware)
