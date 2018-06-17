import React from 'react'

class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(){
    this.disp
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



export default LoginForm;
