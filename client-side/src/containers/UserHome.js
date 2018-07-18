import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../routes/history'
import SearchForm from '../components/SearchForm'
import SearchResults from './SearchResults'
import { fetchUser } from '../actions/loginActions'
import ControlledPopup from '../components/Popup'

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
          <ControlledPopup Fave={this.props.state.latestFave}/>
          <SearchForm />
          <SearchResults />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state: state.favoritesReducer}
}

export default connect(mapStateToProps, { fetchUser })(UserHome);
