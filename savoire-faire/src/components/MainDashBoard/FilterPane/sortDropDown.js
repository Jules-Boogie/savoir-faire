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
    <option className="btn" value="highest" > Highest Price</option>
      <option className="btn" value="lowest" > Lowest Price</option>
      <option className="btn" value="loved" > Most Loved </option>
      <option className="btn" value="newest"  > Newest</option>
    </Form.Control>
  </Form.Group>


    </div>






)
    
}
export default sortPage;