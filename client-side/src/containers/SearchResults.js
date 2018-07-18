import React from 'react'
import { connect } from 'react-redux'
import SearchList from '../components/SearchList'


class SearchResults extends React.Component{
  constructor(){
    super()
    this.state = {
      search: 5,
    }
  }

  handleLoadMore = (event) => {
    event.preventDefault();
    this.setState({
      search: this.state.search + 5
    })
  }

  render(){
    return(
      <div>
        <SearchList locations={this.props.locations.slice(0, this.state.search)}/>
        {this.props.locations.length ? <button onClick={this.handleLoadMore}>Load More</button> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { locations: state.searchReducer.locations}
}

export default connect(mapStateToProps)(SearchResults)
