export default function reducer(state = {
  favorites:[],
  adding: false,
  added:false,
  fetching:false,
  fetched: false,
  deleting: false,
  errors: null
}, action){
    switch(action.type){
      case "SEND_FAVORITE":
        return {...state, adding: true, added: false}
      case 'ADD_FAILED':
        return {...state, errors: action.errors}
      case 'FAVORITE_ADDED':
        return {...state, added: true, fetching: false}
      case 'GET_FAVORITES':
        return {...state, fetching: true}
      case 'GOT_FAVORITES':
        return {...state, fetching: false, fetched: true, favorites: action.favorites}
      case 'DELETING_FAVORITE':
        return {...state, deleting: true}
      case 'FAVORITE_DELETED':
        return {...state, deleting: false, favorites: action.favorites}
      case 'LOG_OUT':
        return {...state, fetched: false, fetching: false, favorites: []}
      default:
        return state
    }
  }
