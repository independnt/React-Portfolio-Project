export default function reducer(state = {
  user:{},
  fetching: false,
  fetched: false,
  errors: null}, action){
  switch(action.type){
    case "SEND_LOGIN":
      return {...state, fetching: true}
    case 'LOGIN_FAILED':
      return {...state, errors: action.errors}
    case 'LOGIN_SUCCESS':
      return {...state, fetched: true, fetching: false, token: action.token}
    case 'GET_USER':
      return {...state, fetching: true}
    case 'GOT_USER':
      return {...state, fetching: false, user: action.user}
    default:
      return state
  }
}
