import React from 'react'
import { Router, Route } from 'react-router-dom';
import history from './history'
import UserHome from '../containers/UserHome';
import Login from '../containers/Login';
import Favorites from '../containers/Favorites'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Header from '../components/Header'
import NavBar from '../components/NavBar'


export default () => (
  <Router history={history}>
    <div>
    <NavBar location={history.location}/>
        <Route path="/" exact render={props => <Header {...props}/>}/>
        <Route path='/home' exact render={props => <UserHome {...props}/>}/>
        <Route path='/favorites' exact render={props => <Favorites {...props}/>}/>
        <Route path='/signup' exact render={props => <SignupForm {...props}/>}/>
        <Route path='/login' exact render={props => <LoginForm {...props}/>}/>
    </div>
  </Router>
)
