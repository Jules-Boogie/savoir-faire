import React from 'react'
import { Form } from 'react-bootstrap'

function sortPage(props){

  

// {()=>this.filterField("lowest")}
// {()=>this.filterField("highest")}

return (

    <div> 
    <Form.Group  controlId="exampleForm.ControlSelect1">
    <Form.Label> Sort By </Form.Label>
    <Form.Control onChange={props.change} value={props.value} as="select">
    <option  value="highest" > Highest Price</option>
      <option  value="lowest" > Lowest Price</option>
      <option  value="loved" > Most Loved </option>
      <option  value="newest"  > Newest</option>
    </Form.Control>
  </Form.Group>


    </div>






)
    
}
export default sortPage;