
// import { useForm } from 'react-hook-form'
import { useForm } from "react-hook-form";
import React, { useState, useContext} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import AuthenticationContext from "../../Utils/Context/authenticationContext"
import API from "../../Utils/API/Users/API_Users"


const SignIn = () => {
  
  const authenticate = useContext(AuthenticationContext)
  const [user, setUser] = useState({})
  const[formdata, setFormdata] = useState({
    password:"",
    email:""
  })

  const handleInputChange = event => {
    
    const {name, value} = event.target


    // Updating the input's state
    setFormdata({
      ...formdata,
      [name]: value
    });
  };
  
 
 const[passwordvalid, setPasswordValid] = useState(false)

  const signinSubmithandler = (event)=>{
    event.preventDefault()
    console.log("submit")
    

   API.LoginUser({
      email: formdata.email,
      password:formdata.password
    })
    .then(res => {setUser(res.data) 
      console.log(res.data)
      authenticate.login(res.data.userId, res.data.token)
    })
     .catch(err => console.log(err))
    
    
  }
   

    // if(!user) {
    //   console.log("user not found")
    // }

    // setPasswordValid(Bcryptjs.compare(formState.password, user.password))
    // .catch(err => console.log(false))

    // const signinToken = Webtoken.sign({email: inputState.email}, 'test')
    // .then(res.json({email: inputState.email, token:signupToken}))
    
    
      
    

 


    return (

        <div className="row container">
          <div className="col"></div>
          
          
          <div className="col">
          <h3> Sign in Below</h3>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  value={formdata.email}
    name="email"
    onChange={handleInputChange}
    type="text"
    placeholder="email (required)"
    />
    <Form.Text className="text-muted">
      Dont have an account? 
      <a href="/signup"> sign up instead </a>
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    value={formdata.password}
    name="password"
    onChange={handleInputChange}
    type="password"
    placeholder="Password (required)"
         />
   
    </Form.Group>
  <Button variant="primary" disabled={!(formdata.email && formdata.password)} onClick={signinSubmithandler}  type="submit">
    Login
  </Button>
</Form>
</div>
<div className="col"></div>
        </div>
    )
}

export default SignIn;