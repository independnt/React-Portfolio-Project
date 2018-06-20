import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHome from './containers/UserHome'
import Login from './containers/Login'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Places!</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Login />
          </div>
          <Router>
            <div>
              <Route exact path="/home" component={UserHome}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
