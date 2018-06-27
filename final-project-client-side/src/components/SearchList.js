import React, { Component } from 'react';
import { connect } from 'react-redux'


class SearchList extends React.Component{
  handleAdd = (event) => {
    event.preventDefault();
    console.log("oh yes daddy, press me again.")
  }
  render(){

    const listResults = this.props.locations.map(location => (
           <li key={location.id}>
             Name: {location.name}<br/>
             City/State: {location.city}/{location.state}<br/>
             Street: {location.street}<br/>
             Phone: {location.phone}<br/>
             Website: <a href={`http://` + location.url} target="_blank">{location.url}</a><br/>
             <button onClick={this.handleAdd}>Add to Favorites</button>
           </li>
         )
       )

    return (
      <div>
        <ul>
          {listResults}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.loginReducer}
}

export default connect(mapStateToProps)(SearchList)
