import fetch from 'isomorphic-fetch'

export function fetchSignup(userObj){
  const data = JSON.stringify(userObj)
  const request = new Request('http://localhost:3000/api/users',{
    method: 'POST',
    body: data,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })

  return function(dispatch){
    dispatch({type: 'SEND_SIGNUP'})
    return fetch(request)
    .then(resp => resp.json())
    .then(user => {
      dispatch({type: 'SIGNUP_SUCCESS', payload: user})
    })
  }
}
