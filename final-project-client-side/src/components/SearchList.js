import React, { Component } from 'react';



class SearchList extends React.Component{
  handleAdd = (event) => {
    event.preventDefault();
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

export default SearchList
