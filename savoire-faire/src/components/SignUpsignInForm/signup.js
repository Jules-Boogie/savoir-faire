import React from 'react';
import { useForm } from 'react-hook-form'
import { Form, Card, Button } from 'react-bootstrap'
import { Row, Col, Grid } from 'react-bootstrap';

function SignUpForm() {

  const {inputState, inputHandler} = useForm ({
    email:{
      input:""
    },
    password:{
      input:""
    }, 
    firstname:{
      input:""
    },
    lastname:{
      input:""
    }


  }, false)
  
  const signupSubmithandler = ()=>{
    console.log(inputState)
  }

  return (
    <div>
      <Card>
      <h3> Sign Up Below</h3>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label> First Name</Form.Label>
            <Form.Control type="firstname" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label> Last Name </Form.Label>
            <Form.Control type="lastname"
            onInput={inputHandler}
             placeholder="Last Name" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" 
            placeholder="Enter email"
            onInput={inputHandler}
             />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
            onInput={inputHandler} 
            placeholder="Password" />
          </Form.Group>
        </Form.Row>

        

        <Button variant="primary" onSubmit={signupSubmithandler}type="submit">
          Submit
  </Button>
      </Form>
      </Card>
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


