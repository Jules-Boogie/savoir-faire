import React from 'react'
import { Form, Container, InputGroup, Button, FormControl} from "react-bootstrap"


function mealSearchForm(props){

    return(
<div>
    <Container>
<Form >
  <Form.Group  controlId="formBasicRange">
    <Form.Label > Calories </Form.Label>
    <Form.Control name="calories"value={props.rangeValue} onChange={props.handleChange} min="1700" max="3000" type="range" />
  </Form.Group>
  <InputGroup>
    <InputGroup.Prepend >
      <InputGroup.Text > Exclude: </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl name="exclude" placeholder="A comma-separated list of allergens or ingredients that must be excluded." value={props.inputValue} onChange={props.handleChange} as="textarea" aria-label="With textarea" />
  </InputGroup>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label> Diet: </Form.Label>
    <Form.Control  name="diet" value={props.valueSelect} onChange={props.handleChange} as="select" custom>
    <option value=""> I eat everything! </option>
      <option value="glutenfree">Gluten Free</option>
      <option value="ketogenic">Ketogenic</option>
      <option value="vegetarian"> Vegetarian</option>
      <option value="vegan">Vegan</option>
      <option value="paleo">Paleo</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" onClick={props.handleSubmit} type="submit">
    Submit
  </Button>
</Form>
</Container>
</div>



)





}

export default mealSearchForm;
