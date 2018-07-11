import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFavorites } from '../actions/favoriteActions'
import FavoriteList from '../components/FavoriteList'

class Favorites extends React.Component{

  componentDidMount(){
    if(localStorage.getItem("userId")){
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      console.log(localStorage.getItem('userId'))
      this.props.getFavorites(userId, token)
    }
  }

  render(){
    return (
      <div>
        <h2>Your Favorites</h2>
        <FavoriteList faveList={this.props.state.favorites}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.favoritesReducer}
}

export default connect(mapStateToProps, { getFavorites })(Favorites)
