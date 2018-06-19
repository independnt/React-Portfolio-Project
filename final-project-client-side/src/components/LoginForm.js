import React from 'react'
import { fetchLogin } from '../actions/loginActions'
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

  handleOnSubmit(event){
    event.preventDefault();
    this.props.fetchLogin(this.state.username, this.state.password)
  }

  render(){
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
        type="text"
        value={this.state.username.value}
        placeholder="username"
        />
        <input
        type="password"
        value={this.state.password.value}
        placeholder="password"
        />
        <input type="submit" value="Sign up"></input>
      </form>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    fetchLogin: fetchLogin
  }
}


export default connect(null, mapDispatchToProps)(LoginForm)
