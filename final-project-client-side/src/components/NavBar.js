import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap/lib'
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
      <Navbar.Collapse>
        <Nav pullRight>
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
        </Nav>
      </Navbar.Collapse>
    )

    const userNav = (
      <Navbar.Collapse>
        <Nav pullRight>
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
        </Nav>
      </Navbar.Collapse>
    )


    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              BrewView
            </Navbar.Brand>
          </Navbar.Header>
            {this.state.isLoggedIn ? userNav : defaultNav}
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {state: state.loginReducer}
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
