import React, { Component } from 'react'
import { fetchLogin } from '../actions/loginActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const userObj = { username: this.state.username, password: this.state.password }
    this.props.fetchLogin(userObj)
  }

  render(){
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
        type="text"
        placeholder="username"
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



export default connect(null, { fetchLogin })(LoginForm)
