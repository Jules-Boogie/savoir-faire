import React from 'react';
import { useForm } from 'react-hook-form'
import React, { useContext } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import AuthenticationContext from "../../Utils/Context/authenticationContext"

function signIn(){
  const authenticate = useContext(AuthenticationContext)

  const [inputState, inputHandler] = useForm ({
    email:{
      input:""
    },
    password:{
      input:""
    }
  }, false)
  
  const signinSubmithandler = ()=>{
    console.log(inputState)
    authenticate.logIn()

  }


    return (

        <div>
          <Card>
          <h3> Sign in Below</h3>
          
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    placeholder="Enter email"
    onInput={inputHandler}
    errorText = "please enter valid email"
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" 
    placeholder="Password" 
    onInput={inputHandler}
    errorText="please enter valid password"
    />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" onSubmit={signinSubmithandler} disabled={!inputState} type="submit">
    Login
  </Button>
</Form>
</Card>
        </div>
    )
}

export default signIn;