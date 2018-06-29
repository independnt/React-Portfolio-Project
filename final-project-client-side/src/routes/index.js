import React from 'react'
import { Router, Route } from 'react-router-dom';
import history from './history'
import UserHome from '../containers/UserHome';
import Login from '../containers/Login';
import Favorites from '../containers/Favorites'


export default () => (
  <Router history={history}>
    <div>
      <Route path="/" exact render={props => <Login {...props}/>}/>
      <Route path='/home' exact render={props => <UserHome {...props}/>}/>
      <Route path='/favorites' exact render={props => <Favorites {...props}/>}/>
    </div>
  </Router>
)
