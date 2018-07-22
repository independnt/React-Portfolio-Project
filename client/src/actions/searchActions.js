import fetch from 'isomorphic-fetch'

export function fetchStateResults(input){
    return (dispatch) => {
      dispatch({type: 'FETCH_DATA'})
        return fetch(`/api/get_state_info/${input}`)
        .then(resp => resp.json())
        .then(jsonResp => {
          dispatch({type: 'DATA_FETCHED', locations: jsonResp})
        })
        .catch(err => {
         dispatch({type:'DATA_FAILED'})
         })
       }
   }

export function fetchCityResults(city, state){
    return (dispatch) => {
      dispatch({type: 'FETCH_DATA'})
        return fetch(`/api/get_city_info/${city}/${state}`)
        .then(resp => resp.json())
        .then(jsonResp => {
          dispatch({type: 'DATA_FETCHED', locations: jsonResp})
        })
        .catch(err => {
         dispatch({type:'DATA_FAILED'})
         })
       }
  }
