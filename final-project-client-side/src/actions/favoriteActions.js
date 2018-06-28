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
    return fetch(request)
    .then(resp => resp.json())
    .then(responseJson => {
      dispatch({type: 'FAVORITE_ADDED', favorite: responseJson})
    }).catch(err => {
      dispatch({type: 'ADD_FAILED'})
    })

  }
}
