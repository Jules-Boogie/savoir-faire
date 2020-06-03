import React from 'react'
import { Form } from 'react-bootstrap'

function sortPage(props) {



  // {()=>this.filterField("lowest")}
  // {()=>this.filterField("highest")}

  return (

    <div>
      <form>
        <label>
          Sort by:
    <select onChange={props.change} value={props.value} as="select">
            <option value="highest" > Highest Price</option>
            <option value="lowest" > Lowest Price</option>
            <option value="loved" > Most Loved </option>
            <option value="newest"  > Newest</option>
          </select>
          </label>
          <h5>{props.value}</h5>
  </form>


    </div>






)
    
}
export default sortPage;