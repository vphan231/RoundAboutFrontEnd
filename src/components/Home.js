import React from 'react';
import {Link} from 'react-router-dom'
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap'
import ListListings from './ListListings'

function Home() {
    const listings = [
        { id: 1, name: "Leanne Graham" },
        { id: 2, name: "Ervin Howell" },
        { id: 3, name: "Clementine Bauch" },
        { id: 4, name: "Patricia Lebsack" }
      ];

  return (
    <Container>
      <Jumbotron>HomePage</Jumbotron>
      <ListListings listings = {listings}/>
    </Container>
  );
}

export default Home;