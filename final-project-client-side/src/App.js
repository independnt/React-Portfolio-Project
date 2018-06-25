import React, { Component } from 'react';
import logo from './logo.svg';
import UserHome from './containers/UserHome'
import Login from './containers/Login'
import Routes from './routes'
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
