import React from 'react';
import {Form, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Login() {
  
  return (
      <div className='form'>
        <br />
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
                <Link to='/register'>Do not have an account? Please register here.</Link>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        <br />
      </div>
  );
}

export default Login;