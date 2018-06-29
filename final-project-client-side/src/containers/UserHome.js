import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import history from '../routes/history'
import SearchForm from '../components/SearchForm'
import SearchResults from './SearchResults'
import { fetchUser } from '../actions/loginActions'

class UserHome extends React.Component{

  componentDidMount(){
    if(!localStorage.getItem('token')){
      history.push('/')
    }else{
      const token = this.props.state.token
      this.props.fetchUser(token)
    }
  }

  render(){
    return (
      <div>
          <NavBar />
          <SearchForm />
          <SearchResults />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state: state.loginReducer}
}

export default connect(mapStateToProps, { fetchUser })(UserHome);
