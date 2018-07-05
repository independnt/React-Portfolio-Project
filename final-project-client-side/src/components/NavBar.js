import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib'
import { LinkContainer } from 'react-router-bootstrap';
import { logoutUser } from '../actions/loginActions'


class NavBar extends React.Component{
  constructor(state){
    super(state);
    this.state = {
      isLoggedIn: !!localStorage.getItem("token"),
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.state.fetched === true){
      this.setState({
        isLoggedIn: true,
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

    const defaultNav = (
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/login"><NavItem eventKey={1}>Login</NavItem></LinkContainer>
          <LinkContainer to="/signup"><NavItem eventKey={2}>Signup</NavItem></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    )

    const userNav = (
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
