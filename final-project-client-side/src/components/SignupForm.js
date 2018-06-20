import React, { Component } from 'react'
import { fetchSignup } from '../actions/signupActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleUserChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePassChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const userObj = { email: this.state.email, password: this.state.password }
    this.props.fetchSignup(userObj)
  }

  render(){
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
        type="text"
        placeholder="email"
        onChange={this.handleUserChange}
        value={this.state.username}
        />
        <input
        type="password"
        placeholder="password"
        onChange={this.handlePassChange}
        value={this.state.password}
        />
        <input type="submit" value="Sign up"></input>
      </form>
    )
  }
}



export default connect(null, { fetchSignup })(LoginForm)
