import fetch from 'isomorphic-fetch'

export function fetchStateResults(input){
  const apiKey = process.env.BEERDB_KEY
  console.log(apiKey)
    return (dispatch) => {
      dispatch({type: 'FETCH_DATA'})
        return fetch(`https://beermapping.com/webservice/locstate/${apiKey}/${input}&s=json`)
        .then(resp => resp.json())
        .then(jsonResp => {
          dispatch({type: 'DATA_FETCHED', locations: jsonResp})
        })
        .catch(err => {
         dispatch({type:'DATA_FAILED'})
         })
       }
   }

export function fetchCityResults(input){
  const apiKey = process.env.BEERDB_KEY
    return (dispatch) => {
      dispatch({type: 'FETCH_DATA'})
        return fetch(`https://beermapping.com/webservice/loccity/${apiKey}/${input}&s=json`)
        .then(resp => {
          return resp.json()
        })
        .then(jsonResp => {
          dispatch({type: 'DATA_FETCHED', locations: jsonResp})
        })
        .catch(err => {
         dispatch({type:'DATA_FAILED'})
         })
       }
  }
