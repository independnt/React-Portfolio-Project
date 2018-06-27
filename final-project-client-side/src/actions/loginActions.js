import fetch from 'isomorphic-fetch'

export function fetchLogin(userObj){
  const data = JSON.stringify(userObj)
  const request = new Request('http://localhost:3000/api/user_token',{
    method: 'POST',
    body: data,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })

  return function(dispatch){
    dispatch({type: 'SEND_LOGIN'})
    return fetch(request)
    .then(resp => resp.json())
    .then(responseJson => {
      dispatch({type: 'LOGIN_SUCCESS', token: responseJson.jwt})
    })
    .catch(err => {
      dispatch({type: 'LOGIN_FAILED'})
    })
  }
}

export function fetchUser(token){
  // const header = new Headers(`Authorization`:`Bearer ${token}`, `Conent-Type`:`application/json`)
  const request = new Request(`http://localhost:3000/api/get_user`, {
    method: 'GET',
    headers: {
      "Authorization":`Bearer ${token}`,
      "Content-Type":"application/json"
    }
  })
  return (dispatch) => {
    dispatch({type: 'GET_USER'})
    return fetch(request)
    .then(resp => resp.json())
    .then(respJson => {
      dispatch({type: 'GOT_USER', user: respJson})
    })
  }
}
