import React, { Component } from 'react'
import States from '../assets/states'
import { connect } from 'react-redux'
import { fetchStateResults } from '../actions/searchActions'
import { fetchCityResults } from '../actions/searchActions'

class SearchForm extends React.Component{
  constructor(){
    super()
    this.state = {
      state: '',
      cityState: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleStateSubmit = (event) => {
    event.preventDefault();
    this.props.fetchStateResults(this.state.state)
  }


  handleCitySubmit = (event) => {
    event.preventDefault();
    this.props.fetchCityResults(this.state.cityState)
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
            <button onClick={this.handleCitySubmit}>Search</button>
            <h3>Or</h3>
            <label>Search by State</label>
              <input
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.state}
              placeholder="i.e ny, co ect.."
              />
              <button onClick={this.handleStateSubmit}>Search</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state: state.searchReducer}
}

export default connect (mapStateToProps, { fetchStateResults, fetchCityResults })(SearchForm);
