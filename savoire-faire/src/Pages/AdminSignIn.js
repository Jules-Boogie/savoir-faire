import React from 'react';
import { Form, Button, Jumbotron, Card } from 'react-bootstrap'
import React, { useContext } from 'react'
import AuthenticationContext from "../Utils/Context/authenticationContext"

function AdminsignIn(){

  const authenticate = useContext(AuthenticationContext)

  const [inputState, inputHandler] = useForm ({
    email:{
      input:""
    },
    password:{
      input:""
    }
  }, false)

  const adminSubmithandler = ()=>{
    console.log(inputState)
    authenticate.adminLogin()
  }


    return (

        <div>
           <Card>
            <h1> Sign In as An Administrator</h1> 
            
            <div className="row">
                <div className="col-sm-4"></div>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" 
    onInput={inputHandler}
    errorText = "please enter valid email"
    placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button onSubmit={adminSubmithandler} variant="primary" type="submit">
    Submit
  </Button>
  <Form.Text className="text-muted">
      Not a site Administrator? Go to user sign in <a href="/"> here!</a>
    </Form.Text>
</Form>
<div className="col-sm-4"></div>
</div>
</Card>
        </div>
    )
}

export default AdminsignIn;