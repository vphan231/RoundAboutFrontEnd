import React from 'react';
import {Link} from 'react-router-dom'
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap'
import ListListings from './ListListings'
import SearchListing from './SearchListing'

function Home() {
    const listings = [
        { id: 1, name: "Listing 1" },
        { id: 2, name: "Listing 2" },
        { id: 3, name: "Listing 3" },
        { id: 4, name: "Listing 4" }
      ];

    const imageURL = '../../public/photos/Rutgers-Livingston19-2600x1734.jpg';

  return (
    <div className='bg'>
        <SearchListing/>
        <ListListings listings = {listings}/>
    </div>
  );
}

export default Home;