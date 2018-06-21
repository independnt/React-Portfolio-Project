import React, {Component} from 'react'
import { fetchLogin } from '../actions/loginActions'
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

  handleOnSubmit = (event) => {
    event.preventDefault();
    const userObj = {auth: { email: this.state.email, password: this.state.password } }
    this.props.fetchLogin(userObj)
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

  render(){
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
        type="text"
        placeholder="email"
        onChange={this.handleUserChange}
        value={this.state.email}
        />
        <input
        type="password"
        placeholder="password"
        onChange={this.handlePassChange}
        value={this.state.password}
        />
        <input type="submit" value="Log in"></input>
      </form>
    )
  }
}

export default connect (null, { fetchLogin })(LoginForm)
