import React, { Component } from 'react';
import { addFavorite } from '../actions/favoriteActions'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { SearchItem } from '../themes/styling'

class SearchList extends React.Component{

  handleAdd = (event) => {
    const { locations, state } = this.props
    const target = locations.find((place, index) => index == event.target.dataset.id)
    const targetData = {favorite: {name: target.name, city: target.city, state: target.state, street: target.street, phone: target.phone, url: target.url, likes: 0}}
    const userId = state.user.id
    const token = localStorage.getItem("token")
    console.log(targetData)
    this.props.addFavorite(targetData, userId, token)
  }

  render(){

    const listResults = this.props.locations.map((location, index) => (


        <li key={location.id}>
          Name: {location.name}<br/>
          City/State: {location.city}/{location.state}<br/>
          Street: {location.street}<br/>
          Phone: {location.phone}<br/>
          Website: <a href={`http://` + location.url} target="_blank">{location.url}</a><br/>
          <Button onClick={this.handleAdd.bind(this)} data-id={index}>Add to Favorites</Button>
        </li>

       )
     )

    return (
      <div>
        <ul>
          {listResults}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.loginReducer}
}

export default connect(mapStateToProps, { addFavorite })(SearchList)
