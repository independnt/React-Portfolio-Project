import React, { Component } from 'react'

class SearchForm extends React.Component{
  constructor(){
    super()
    this.state = {
      state: '',
      cityState: ''
    }
  }

  render(){
    return (
      <div>
        <div className="page-title">
          <h2>Start your search</h2>
        </div>

        <div className="search-form">
          <form>
            <label>Search By City</label>
              <input
              type="text"
              value={this.state.cityState}
              placeholder="i.e new york,ny "
              />
            <h3>Or</h3>
            <label>Search by State</label>
              <input
              type="text"
              value={this.state.state}
              placeholder="i.e ny, co ect.."
              />
          </form>
        </div>
      </div>
    )
  }
}

export default SearchForm;
