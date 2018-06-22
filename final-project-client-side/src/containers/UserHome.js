import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import history from '../routes/history'


class UserHome extends React.Component{
  componentDidMount(){
    if(!this.props.state.fetched){
      history.push('/')
    }
  }
  render(){
    return (
      <NavBar />

    )
  }
}

const mapStateToProps = (state) => {
  return { state: state.loginReducer}
}

export default connect(mapStateToProps)(UserHome);
