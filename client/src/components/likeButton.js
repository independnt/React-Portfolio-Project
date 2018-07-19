import React from 'react'
import { addLike } from '../actions/favoriteActions'
import { connect } from 'react-redux'

class LikeButton extends React.Component{

  handleLike = (event) => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const faveId = this.props.faveId
    const updateLike = {favorite: { likes: this.props.likeNumber + 1}}
    this.props.addLike(token, userId, faveId, updateLike)
  }

  render(){
    return(
      <div>
        <button onClick={this.handleLike}>Like</button>
          <p>{this.props.likeNumber}</p>
      </div>
    )
  }
}

export default connect(null, { addLike })(LikeButton)
