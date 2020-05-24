import React from 'react';
import { Form, Button, Jumbotron } from 'react-bootstrap'

function AdminsignIn(){

    return (

        <div>
            <Jumbotron className = "text-center">
            <h1> Sign In as An Administrator</h1> 
            </Jumbotron>
            <div className="row">
                <div className="col-sm-4"></div>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Form.Text className="text-muted">
      Not a site Administrator? Go to user sign in <a href="/"> here!</a>
    </Form.Text>
</Form>
<div className="col-sm-4"></div>
</div>
        </div>
    )
}

export default AdminsignIn;