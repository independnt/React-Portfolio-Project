export default function reducer(state = {
  favorites:[],
  adding: false,
  latestFave:[],
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
        return {...state, added: true, fetching: false, latestFave: action.favorite}
      case 'GET_FAVORITES':
        return {...state, fetching: true}
      case 'GOT_FAVORITES':
        return {...state, fetching: false, fetched: true, favorites: action.favorites}
      case 'DELETING_FAVORITE':
        return {...state, deleting: true}
      case 'FAVORITE_DELETED':
        return {...state, deleting: false, favorites: action.favorites}
      case 'LIKING_FAVORITE':
        return {...state, fetching: true, fetched: false}
      case 'LIKED_FAVORITE':
        return {...state,
          favorites: state.favorites.map(favorite => (favorite.id === action.favorite.id) ? action.favorite : favorite),
        }
      case 'LOG_OUT':
        return {...state, fetched: false, fetching: false, favorites: [], adding: false, added: false}
      default:
        return state
    }
  }
