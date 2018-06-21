import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserHome from '../containers/UserHome';
import Login from '../containers/Login';

export default () => (
  <Router>
    <div>
      <Route path="/" exact component={Login}/>
      <Route path='/home' exact component={UserHome}/>
    </div>
  </Router>
)
