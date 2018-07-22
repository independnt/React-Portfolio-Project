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
  const cityState = `${city.split(' ').join('')},${state}`
    return (dispatch) => {
      dispatch({type: 'FETCH_DATA'})
        return fetch(`/api/get_city_info/${cityState}`)
        .then(resp => resp.json())
        .then(jsonResp => {
          dispatch({type: 'DATA_FETCHED', locations: jsonResp})
        })
        .catch(err => {
         dispatch({type:'DATA_FAILED'})
         })
       }
  }
