import { useForm } from "react-hook-form";
import { Form, Button, Jumbotron, Card } from 'react-bootstrap'
import React, { useContext } from 'react'
import AuthenticationContext from "../Utils/Context/authenticationContext"

function AdminsignIn() {

  const authenticate = useContext(AuthenticationContext)

  const { inputState, inputHandler } = useForm({
    email: {
      input: ""
    },
    password: {
      input: ""
    }
  }, false)

  const adminSubmithandler = () => {
    console.log("clicked")
    authenticate.adminLogin()
  }


  return (

    <div className="container">
      <Card>
        <Card.Title> Sign In as An Administrator</Card.Title>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
              onInput={inputHandler}
              errortext="please enter valid email"
              placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={adminSubmithandler} variant="primary" type="submit">
            Submit
  </Button>
          <Form.Text className="text-muted">
            Not a site Administrator? Go to user sign in <a href="/authenticate"> here!</a>
          </Form.Text>
        </Form>
        </Card>
</div>

        
    )
}

export default AdminsignIn;