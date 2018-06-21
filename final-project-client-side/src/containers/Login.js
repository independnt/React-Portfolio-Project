import React from 'react'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import '../App.css';
import logo from '../logo.svg';




const Login = () =>

  <div className="login">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Places!</h1>
      </header>
      <p className="App-intro">
        Log in or Sign up to start!
      </p>
    </div>
      <SignupForm />
      <LoginForm />
  </div>

export default Login;
