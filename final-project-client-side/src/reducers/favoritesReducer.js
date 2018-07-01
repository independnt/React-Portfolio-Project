export default function reducer(state = {
  favorites:[],
  adding: false,
  added:false,
  fetching:false,
  fetched: false,
  errors: null
}, action){
    switch(action.type){
      case "SEND_FAVORITE":
        return {...state, adding: true, added: false}
      case 'ADD_FAILED':
        return {...state, errors: action.errors}
      case 'FAVORITE_ADDED':
        return {...state, added: true, fetching: false, favorites: action.favorite}
      case 'GET_FAVORITES':
        return {...state, fetching: true}
      case 'GOT_FAVORITES':
        return {...state, fetching: false, fetched: true, favorites: action.favorites}
      default:
        return state
    }
  }
