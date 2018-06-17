export default function reducer(state = {
  data:{},
  fetching: false,
  fetched: false,
  errors: null}, action){
  switch(action.type){
    case "SEND_LOGIN":
      return {...state, fetching: true}
    case 'LOGIN_FAILED':
      return {...state, error: action.payload}
    case 'LOGIN_SUCCESS':
      return {...state, fetched: true, fetching: false}
    default:
      return state
  }
}
