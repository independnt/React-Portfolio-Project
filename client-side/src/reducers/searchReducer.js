export default function reducer(state = {
  user:{},
  locations:[],
  fetching: false,
  fetched: false,
  errors: null}, action){
  switch(action.type){
    case "FETCH_DATA":
      return {...state, fetching: true}
    case 'DATA_FAILED':
      return {...state, errors: action.errors}
    case 'DATA_FETCHED':
      return {...state, fetched: true, fetching: false, locations: action.locations}
    case 'LOG_OUT':
      return {...state, fetched: false, fetching: false, locations: []}
    default:
      return state
  }
}
