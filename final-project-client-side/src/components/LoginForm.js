import React, {Component} from 'react'
import { fetchLogin } from '../actions/loginActions'
import { connect } from 'react-redux'
import history from '../routes/history'
import { FormHolder } from '../themes/styling'

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

    const loginError = this.props.state.errors

    if(this.props.state.fetched){
      this.props.history.push('/home')
    }
        return (
          <div>
              {loginError ? loginError : null}
              <FormHolder>
                <form onSubmit={this.handleOnSubmit}>
                <h2 className="formTitle">Log in</h2>
                <br/>
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
                  <br/>
                  <br/>
                    <input type="submit" value="Log in"></input>
                </form>
              </FormHolder>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return { state: state.loginReducer}
}

export default connect (mapStateToProps, { fetchLogin })(LoginForm)
