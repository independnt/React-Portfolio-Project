export default function reducer(state = {
  favorites:[],
  adding: false,
  added:false,
  errors: null
}, action){
    switch(action.type){
      case "SEND_FAVORITE":
        return {...state, adding: true, added: false}
      case 'LOGIN_FAILED':
        return {...state, errors: action.errors}
      case 'FAVORITE_ADDED':
        return {...state, added: true, fetching: false}
      default:
        return state
    }
  }
