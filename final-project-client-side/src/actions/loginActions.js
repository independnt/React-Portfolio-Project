import fetch from 'isomorphic-fetch'

export function fetchLogin(userObj){
  const data = JSON.stringify(userObj)
  console.log(data)
  const request = new Request('http://localhost:3000/api/users',{
    method: 'POST',
    body: data,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })

  console.log(request)
  return function(dispatch){
    dispatch({type: 'SEND_LOGIN'})
    return fetch(request)
    .then(resp => resp.json())
    .then(responseJson => {
      dispatch({type: 'LOGIN_SUCCESS', user: responseJson})
    })
    .catch(err => {
      dispatch({type: 'LOGIN_FAILED'})
    })
  }
}
