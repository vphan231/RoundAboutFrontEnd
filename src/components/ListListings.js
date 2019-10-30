import React from 'react';
import Listing from './Listing'

function ListListings(props) {
  
  return (
    <div className="App">
      {props.listings.map(c => <Listing key={c.id} name={c.name} />)}
    </div>
  );
}

export default ListListings;