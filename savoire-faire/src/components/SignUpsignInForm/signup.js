import React, { useState, useContext } from 'react';

import { Form, Card, Button } from 'react-bootstrap'
import { Row, Col, Grid } from 'react-bootstrap';
import API from "../../Utils/API/Users/API_Users"
import AuthenticationContext from "../../Utils/Context/authenticationContext"

const style= {
  margin:0
} 

function SignUpForm () {
  const authenticate = useContext(AuthenticationContext)
  const [user, setUser] = useState({})
const[formdata, setFormdata] = useState({
  firstname:"",
  lastname:"",
  password:"",
  email:""
})
  

  const signupSubmithandler = (event) => {
    event.preventDefault()
    console.log(formdata.firstname)
   
    // const hashedpassword = Bcryptjs.hash(inputState.password, 10)
    API.addUser({
      firstName: formdata.firstname,
      password: formdata.password,
      lastName: formdata.lastname,
      email: formdata.email
    })
    .then(res => { 
      authenticate.login(res.data.userId, res.data.token)
    }
    )


    // const signupToken = Webtoken.sign({email: inputState.email}, 'test')
    // .then(res.json({email: inputState.email, token:signupToken}))
  }


  const handleInputChange = event => {
    
    const {name, value} = event.target


    // Updating the input's state
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  return (
    
      <div style={style} className="container"> 
        
        <Form >
           
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label> First Name</Form.Label>
              <Form.Control  value={formdata.firstname}
            name="firstname"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label> Last Name </Form.Label>
              <Form.Control value={formdata.lastname}
            name="lastname"
            onChange={handleInputChange}
            type="text"
            placeholder="last Name"
                />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control  value={formdata.email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="email (required)"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  value={formdata.password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password (required)"
                 />
            </Form.Group>
          </Form.Row>



          <Button  disabled={!(formdata.email && formdata.password)}
                onClick={() => {}}variant="primary" onClick={signupSubmithandler} type="submit">
            Submit
  </Button>
        </Form>
     
        </div>

  )
}

export default SignUpForm;

{/* <script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
                                            (function() {
                                                'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
                                                form.addEventListener('submit', function (event) {
                                                    if (form.checkValidity() === false) {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                    }
                                                    form.classList.add('was-validated');
                                                }, false);
    });
  }, false);
})();
</script> */}


