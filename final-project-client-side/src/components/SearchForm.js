import React, { Component } from 'react'

class SearchForm extends React.Component{
  constructor(){
    super()
    this.state = {
      state: '',
      cityState: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleCSSubmit = (event) => {
    event.preventDefault();

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

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
              name="cityState"
              onChange={this.handleChange}
              value={this.state.cityState}
              placeholder="i.e new york,ny "
              />
            <button onSubmit={this.handleCSSubmit}>Search</button>
            <h3>Or</h3>
            <label>Search by State</label>
              <input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.state}
              placeholder="i.e ny, co ect.."
              />
              <button onSubmit={this.handleCitySubmit}>Search</button>
          </form>
          {this.state.state}
          {this.state.cityState}
        </div>
      </div>
    )
  }
}

export default SearchForm;
