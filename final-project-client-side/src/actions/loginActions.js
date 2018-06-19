import fetch from 'isomorphic-fetch'

export function fetchLogin(username, password){
  const request = new Request('http://localhost:3000/api/users')
  method: 'POST'
  body: {
    username: username
    password: password
  }

  return function(dispatch){
    dispatch({type:'SEND_LOGIN'})
    return fetch(request)
    .then(resp => resp.json())
    .then(responseJson => {
      dispatch({type: 'LOGIN_SUCCESS'})
    })
    .catch(err => {
      dispatch({type: 'LOGIN_FAILED'})
    })
  }
}
