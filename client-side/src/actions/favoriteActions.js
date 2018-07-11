import fetch from 'isomorphic-fetch'

export function addFavorite(targetData, userId, token){
  const request = new Request(`http://localhost:3000/api/users/${userId}/favorites`,{
    method: 'POST',
    body: JSON.stringify(targetData),
    headers: {
      "Authorization":`Bearer ${token}`,
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
  return (dispatch) => {
    dispatch({type: 'SEND_FAVORITE'})
    console.log(request)
    return fetch(request)
    .then(resp => resp.json())
    .then(responseJson => {
      dispatch({type: 'FAVORITE_ADDED'})
    }).catch(err => {
      dispatch({type: 'ADD_FAILED'})
    })

  }
}

export function getFavorites(userId, token){
  const request = new Request(`http://localhost:3000/api/users/${userId}/favorites`, {
    method: 'GET',
    headers: {
      "Authorization":`Bearer ${token}`,
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })

  return(dispatch) => {
    dispatch({type: 'GET_FAVORITES'})
    return fetch(request)
    .then(resp => resp.json())
    .then(responseJson => {
      dispatch({type: 'GOT_FAVORITES', favorites: responseJson})
    })
  }

}

export function removeFavorite(userId, favoriteId, token){
  const request = new Request(`http://localhost:3000/api/users/${userId}/favorites/${favoriteId}`,{
    method: 'DELETE',
    headers: {
      "Authorization":`Bearer ${token}`,
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })

  return(dispatch) => {
    dispatch({type: 'DELETING_FAVORITE'})
    return fetch(request)
    .then(resp => resp.json())
    .then(responseJson => {
      dispatch({type: 'FAVORITE_DELETED', favorites: responseJson})
    })
  }
}
