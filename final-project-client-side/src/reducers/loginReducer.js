export default function reducer(state = {
  user:{},
  token:{},
  fetching: false,
  fetched: false,
  errors: null}, action){
  switch(action.type){
    case "SEND_LOGIN":
      return {...state, fetching: true}
    case 'LOGIN_FAILED':
      return {...state, errors: "incorrect username or password, please try again"}
    case 'LOGIN_SUCCESS':
      return setToken(state, action.payload)
    case 'GET_USER':
      return {...state, fetching: true}
    case 'GOT_USER':
      return {...state, fetching: false, user: action.user}
    case 'LOG_OUT':
      localStorage.removeItem('token')
      return {...state, user:{}, fetched: false, fetching: false, token:{}}
    default:
      return state
  }
}

function setToken(state, token){
  if(token.jwt){
    localStorage.setItem('token', token.jwt)
  }
  return {
    ...state,
    fetched: true,
    fetching: false,
    errors: null,
    token: token.jwt
  }
}
