import React from 'react'
import { connect } from 'react-redux'
import SearchList from '../components/SearchList'


class SearchResults extends React.Component{
  render(){
    return(
      <div>
        <SearchList locations={this.props.locations}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { locations: state.searchReducer.locations}
}

export default connect(mapStateToProps)(SearchResults)
