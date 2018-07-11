import React, { Component } from 'react'
import { fetchSignup } from '../actions/signupActions'
import { connect } from 'react-redux'
import { fetchLogin } from '../actions/loginActions'
import { FormHolder } from '../themes/styling'
import { Errors } from '../themes/styling'

class SignupForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  this.handleOnSubmit = this.handleOnSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
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
        <FormHolder>
          <form onSubmit={this.handleOnSubmit}>
          <h2 className="formTitle">Sign up!</h2>
          {errors ? <Errors>{this.handleErrors(errors)}</Errors> : null}
          <br/>
            <input
            type="text"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            />
            <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            />
            <br/>
            <br/>
            <input type="submit" value="Sign up"></input>
          </form>
        </FormHolder>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { state: state.signupReducer,
           login: state.loginReducer}
}



export default connect(mapStateToProps, { fetchSignup, fetchLogin })(SignupForm)
