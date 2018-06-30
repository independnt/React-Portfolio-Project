import React, { Component } from 'react';
import logo from './logo.svg';
import history from './routes/history'
//import Routes from './routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHome from './containers/UserHome';
import Login from './containers/Login';
import Favorites from './containers/Favorites'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import NavBar from './components/NavBar'
import NavHolder from './containers/NavHolder'
import './App.css';



class App extends Component {

  render() {
    return (
      <Router >
       <div>
         <NavHolder />
         <Switch>
           <Route exact path="/" component={Header}/>
           <Route exact path='/home' component={UserHome}/>
           <Route exact path='/favorites' component={Favorites}/>
           <Route exact path='/signup' component={SignupForm}/>
           <Route exact path='/login' component={LoginForm}/>
         </Switch>
       </div>
     </Router>
    );
  }
}

export default App;
