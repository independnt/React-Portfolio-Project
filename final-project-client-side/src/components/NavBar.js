import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/loginActions'


class NavBar extends React.Component{

  render(){
    return (
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
          onClick={() => this.props.logoutUser()}
        >
          Logout
        </NavLink>
      </div>
    )
  }
}


export default connect(null, { logoutUser })(NavBar)
