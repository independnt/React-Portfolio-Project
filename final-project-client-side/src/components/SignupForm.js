import React, { Component } from 'react'
import { fetchSignup } from '../actions/signupActions'
import { connect } from 'react-redux'


class SignupForm extends React.Component{
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

  handleErrors = (errorArray) => {
    if(errorArray.hasOwnProperty("password") && errorArray.hasOwnProperty("email")){
      return "Password and Email can't be blank"
    }else{
      return `${Object.keys(errorArray)} ${Object.values(errorArray)}`
    }
  }

  render(){

    const errors = this.props.state.errors


    return (
      <div>
      <h2>Sign up!</h2>
        {errors ? this.handleErrors(errors) : null}
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
            <input type="submit" value="Sign up"></input>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { state: state.signupReducer}
}



export default connect(mapStateToProps, { fetchSignup })(SignupForm)
