export default function reducer(state = {
  user:{},
  fetching: false,
  fetched: false,
  errors: {}}, action){
  switch(action.type){
    case "SEND_SIGNUP":
      return {...state, fetching: true}
    case 'SIGNUP_FAILED':
      return {...state, errors: action.errors}
    case 'SIGNUP_SUCCESS':
      return setUser(state, action.payload)
    default:
      return state
  }
}

function setUser(state, user){
  return{...state,
  user: user.id,
  errors: user.errors,
  fetched: true}
}
