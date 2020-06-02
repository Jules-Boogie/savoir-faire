import React from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'


function addForm(props){

return (
  <div>
    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Product Name:</Form.Label>
    <Form.Control onChange={props.Changed} value={props.name} type="name" name="name" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label> Image Url:
        <small> Separate multiple Urls by Comma </small>
    </Form.Label>
    <Form.Control onChange={props.Changed} value={props.imageUrl} type="imageUrl" name="imageUrl" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label> Color </Form.Label>
    <Form.Control onChange={props.Changed} name="color"  as="select">
      <option value="red">Red</option>
      <option value="yellow">Yellow</option>
      <option value="green">Green</option>
      <option value="purple">Purple</option>
      <option value="pink">Pink</option>
     
    </Form.Control>
  </Form.Group>
  <Form.Group   controlId="exampleForm.ControlSelect1">
    <Form.Label> Quantity </Form.Label>
    <Form.Control onChange={props.Changed} name="quantity"  as="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Item Type</Form.Label>
    <Form.Control onChange={props.Changed} name="type"  as="select" multiple>
      <option value="clothing"> Clothing</option>
      <option value="shoes">Shoes</option>
      <option value="accessories"> Accesories </option>
      <option> SkinCare </option>
      <option> Beauty </option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label> Product Description</Form.Label>
    <Form.Control onChange={props.Changed} name="description" value={props.description} as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label> Care Instructions </Form.Label>
    <Form.Control onChange={props.Changed} name="care" value={props.care} as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="formBasicRange">
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl onChange={props.Changed} name="price" value={props.price} aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label> Size </Form.Label>
    <Form.Control onChange={props.Changed} name="size" value={props.size} as="textarea" rows="3" />
  </Form.Group>
  
  </Form>
  </div>
)


}

export default addForm;