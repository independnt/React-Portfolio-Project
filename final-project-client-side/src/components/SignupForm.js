import React, { Component } from 'react'
import { fetchSignup } from '../actions/signupActions'
import { connect } from 'react-redux'
import { fetchLogin } from '../actions/loginActions'

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

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.history.push('/home')
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.state.fetched === false && this.props.state.fetched === true){
      const userObj = {auth: { email: this.state.email, password: this.state.password } }
      this.props.fetchLogin(userObj)
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const userObj = { email: this.state.email, password: this.state.password }
    const loginObj = {auth: { email: this.state.email, password: this.state.password } }
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

    if(this.props.login.fetched){
      this.props.history.push('/home')
    }

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
  return { state: state.signupReducer,
           login: state.loginReducer}
}



export default connect(mapStateToProps, { fetchSignup, fetchLogin })(SignupForm)
