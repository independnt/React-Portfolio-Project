import React, { Component } from 'react'


class FaveList extends React.Component{

  handleRemove = (event) => {

  }

  render(){

    const faveList = this.props.faveList.map((favorite, index) => (
      <li key={favorite.id}>
        Name: {favorite.name}<br/>
        City/State: {favorite.city}/{favorite.state}<br/>
        Street: {favorite.street}<br/>
        Phone: {favorite.phone}<br/>
        Website: <a href={`http://` + favorite.url} target="_blank">{favorite.url}</a><br/>
        <button onClick={this.handleRemove.bind(this)} data-id={index}>Remove</button>
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

export default FaveList
