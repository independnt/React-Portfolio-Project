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
      this.props.history.push('/')
    }else{
      const token = localStorage.getItem('token')
      this.props.fetchUser(token)
    }
  }

  render(){
    return (
      <div>
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
