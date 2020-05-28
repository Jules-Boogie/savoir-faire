import React from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'


function addForm(props){

return (
  <div>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Product Name:</Form.Label>
    <Form.Control onChange={props.Changed} value={props.name} type="name" name="name" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label> Image Url:
        <small> Separate multiple Urls by Comma </small>
    </Form.Label>
    <Form.Control onChange={props.Changed} value={props.imageUrl} type="email" name="imageUrl" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label> Color </Form.Label>
    <Form.Control onChange={props.Changed} name="color" value={props.color} as="select">
      <option>Red</option>
      <option>Yellow</option>
      <option>Green</option>
      <option>Purple</option>
      <option>Pink</option>
     
    </Form.Control>
  </Form.Group>
  <Form.Group   controlId="exampleForm.ControlSelect1">
    <Form.Label> Quantity </Form.Label>
    <Form.Control onChange={props.Changed} name="quantity" value={props.quantity} as="select">
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
    <Form.Control onChange={props.Changed} name="type" value={props.type} as="select" multiple>
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
  <Form.Group controlId="formBasicRange">
    <Form.Label> Size: {props.size} <small> Pick Between 4 and 20</small> </Form.Label>
    <Form.Control min="0" max="20" step="1" name="size" onChange={props.Changed} value={props.size} type="range" />
  </Form.Group>

  </div>
)


}

export default addForm;