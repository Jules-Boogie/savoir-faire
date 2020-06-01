import { useForm } from "react-hook-form";
import { Form, Button, Jumbotron, Card } from 'react-bootstrap'
import React, { useState, useContext } from 'react'
import AuthenticationContext from "../Utils/Context/authenticationContext"
import API from "../Utils/API/Users/API_Users";

function AdminsignIn() {

  const authenticate = useContext(AuthenticationContext)

  const [user, setUser] = useState({})
  const [formdata, setFormdata] = useState({
    password: "",
    email: ""
  })

  const handleInputChange = event => {
    
    const {name, value} = event.target


    // Updating the input's state
    setFormdata({
      ...formdata,
      [name]: value
    });
  };
  

  const adminSubmithandler = (event) => {
    event.preventDefault()
    console.log("clicked")
   

    API.LoginAdmin({
      email: formdata.email,
      password:formdata.password
    })
    .then(res => {setUser(res.data) 
      console.log(res.data)
       authenticate.adminLogin(res.data.userID, res.data.token)
    })
     .catch(err => console.log(err))
  }


  return (

    <div className="row container">
    <div className="col"></div>
    
    
    <div className="col">

      <h3> Sign In as An Administrator </h3>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={formdata.email}
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
        <Button variant="primary" disabled={!(formdata.email && formdata.password)} onClick={adminSubmithandler} type="submit">
          Login
    </Button>
      </Form>
    </div>
    <div className="col"></div>
        </div >
    )
}

export default AdminsignIn;