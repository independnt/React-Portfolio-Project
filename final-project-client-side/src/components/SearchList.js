import React from 'react';


const SearchList = ({locations}) => {
    const listResult = locations.map(location => (
    <li key={location.id}>
      Name: {location.name}<br/>
      City/State: {location.city}/{location.state}<br/>
      Street: {location.street}<br/>
      Phone: {location.phone}<br/>
      Website: <a href={`http://` + location.url} target="_blank">{location.url}</a><br/>
    </li>
  )
)


    return (
      <div>
        <ul>
          {listResult}
        </ul>
      </div>

    );
};

export default SearchList
