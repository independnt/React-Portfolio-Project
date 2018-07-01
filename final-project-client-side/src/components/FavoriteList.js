import React, { Component } from 'react'
import { removeFavorite } from '../actions/favoriteActions'
import { connect } from 'react-redux'

class FaveList extends React.Component{

  handleRemove = (event) => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const favoriteId = event.target.dataset.id
    console.log(token, userId, favoriteId)
    this.props.removeFavorite(userId, favoriteId, token)
  }

  render(){

    const faveList = this.props.faveList.map((favorite, index) => (
      <li key={favorite.id}>
        Name: {favorite.name}<br/>
        City/State: {favorite.city}/{favorite.state}<br/>
        Street: {favorite.street}<br/>
        Phone: {favorite.phone}<br/>
        Website: <a href={`http://` + favorite.url} target="_blank">{favorite.url}</a><br/>
        <button onClick={this.handleRemove.bind(this)} data-id={favorite.id}>Remove</button>
      </li>
    )
  )

    return (
      <div>
        <ul>
          {faveList}
        </ul>
      </div>
    )
  }
}

export default connect(null, { removeFavorite })(FaveList)
