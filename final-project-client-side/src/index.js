import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import dotenv from 'dotenv'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store'
require('dotenv').config()


ReactDOM.render(
  <Provider store={store}>
  <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
