
// import { useForm } from 'react-hook-form'
import { useForm } from "react-hook-form";
import React, { useContext} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import AuthenticationContext from "../../Utils/Context/authenticationContext"

const SignIn =() => {
  const authenticate = useContext(AuthenticationContext)

  const {formState, inputHandler} = useForm({
    email:{value:''}, password:{value:''}
     
    
  }, false);
  
  const signinSubmithandler = ()=>{
    console.log("submitted")
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
    element="input" 
    type="email" 
    placeholder="Enter email"
    onInput={inputHandler}
    errortext = "please enter valid email"
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    element="input"
    type="password" 
    placeholder="Password" 
    onInput={inputHandler}
    errortext="please enter valid password"
    />
    </Form.Group>
  <Button variant="primary" onClick={signinSubmithandler} disabled={!formState} type="submit">
    Login
  </Button>
</Form>
</Card>
        </div>
    )
}

export default SignIn;