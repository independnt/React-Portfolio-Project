import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/loginActions'


class NavBar extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoggedIn: !!localStorage.getItem("token")
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.state.fetched === true){
      this.setState({
        isLoggedIn: true
      })
    }
  }

  logout(){
    this.props.logoutUser();
    this.setState({
      isLoggedIn: false
    })

}

  render(){

    // const loggedIn = !!localStorage.getItem("token")

    const defaultNav = (
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px'}}>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/signup"
        >
          Signup
        </NavLink>
      </div>
    )

    const userNav = (
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px'}}>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/favorites"
        >
          Favorites
        </NavLink>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/"
          onClick={() => this.logout()}
        >
          Logout
        </NavLink>
      </div>
    )


    return (
      <div>
        {this.state.isLoggedIn ? userNav : defaultNav}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {state: state.loginReducer}
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
