import React, { Component } from 'react'
import states_hash from '../assets/states'
import { connect } from 'react-redux'
import { fetchStateResults } from '../actions/searchActions'
import { fetchCityResults } from '../actions/searchActions'
import { SearchHolder } from '../themes/styling'
import { Button } from 'react-bootstrap/lib'

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

  onSelectChanged = (value) => {
    this.setState({
      brandSelect: value
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render(){

    const States = states_hash.map((state) => (
      <option value={state}>{state}</option>
    )
  )

    return (
      <div>
        <div className="search-form">
        <SearchHolder>
          <form>
          <h2 className="searchTitle">Start Your Search</h2>
            <label>Search By City/State</label>
            <br/>
              <input
              type="text"
              name="cityState"
              onChange={this.handleChange}
              value={this.state.cityState}
              placeholder="i.e new york,ny "
              />
            <Button bsStyle="warning" onClick={this.handleCitySubmit}>Search</Button>
            <br/>
            <br/>
            <label>Search by State</label>
            <br/>
            <select name="state" onChange={this.handleChange} value={this.state.state}>
              {States}
            </select>
              <Button bsStyle="warning" onClick={this.handleStateSubmit}>Search</Button>
          </form>
          </SearchHolder>
        </div>
        {this.state.state}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state: state.searchReducer}
}

export default connect (mapStateToProps, { fetchStateResults, fetchCityResults })(SearchForm);
