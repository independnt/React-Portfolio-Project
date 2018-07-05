import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib'
import { LinkContainer } from 'react-router-bootstrap';
import { logoutUser } from '../actions/loginActions'


class NavBar extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoggedIn: !!localStorage.getItem("token"),
      key: 1
    }
    this.handleSelect = this.handleSelect.bind(this)
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

  handleSelect(key) {
      console.log('selected' + key);
      this.setState({ key: key });
    }

  render(){

    // const loggedIn = !!localStorage.getItem("token")

    const defaultNav = (
        <Nav pullRight bsStyle="pills" activeKey={this.state.key} onSelect={this.handleSelect}>
          <LinkContainer to="/login"><NavItem eventKey={1} exact="true">Login</NavItem></LinkContainer>
          <LinkContainer to="/signup"><NavItem eventKey={2} exact="true">Signup</NavItem></LinkContainer>
        </Nav>
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
        <Navbar>
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
