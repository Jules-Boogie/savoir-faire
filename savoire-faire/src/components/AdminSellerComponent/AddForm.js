import React from 'react';
import { Form, InputGroup } from 'react-bootstrap'


function addForm(props){

<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Product Name:</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label> Image Url:
        <small> Separate multiple Urls by Comma </small>
    </Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label> Color </Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
     
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label> Quantity </Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Item Type</Form.Label>
    <Form.Control as="select" multiple>
      <option>Dress</option>
      <option>Shirt</option>
      <option>Skirt</option>
      <option>Pants</option>
      <option>Shoes</option>
      <option> Accesories </option>
      <option> SkinCare </option>
      <option> Beauty </option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label> Product Description</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label> Care Instructions </Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="formBasicRange">
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
  </Form.Group>
  <Form.Group controlId="formBasicRange">
    <Form.Label> Size: </Form.Label>
    <Form.Control type="range" />
  </Form.Group>
</Form>




}

export default addForm;