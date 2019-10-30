import React from 'react';
import {Form, Col, Button} from 'react-bootstrap'

function SearchListing() {
  

  return (
      <div className='form'>
        <br />
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridSchool">
                    <Form.Label>School</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Rutgers</option>
                    </Form.Control>
                </Form.Group>

            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridOccupancy">
                    <Form.Label>Max Occupancy</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridHouseType">
                    <Form.Label>House Type</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Apartment</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPrice">
                    <Form.Label>Price(Monthly)</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Under $500</option>
                        <option>$500 - $1000</option>
                        <option>$1000 - $1500</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <br />
      </div>
  );
}

export default SearchListing;