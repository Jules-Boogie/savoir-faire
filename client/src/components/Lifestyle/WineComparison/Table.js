import React from 'react';




function table(props){
return (

  
    <tr >
    <td scope="row"><img src={props.image}></img></td>
    <td >{props.name}</td>
    <td >{props.description}</td>
    <td className="btn" href={props.buy}>Buy
         </td>
    <td >{props.price}</td>
    <td >{props.rating}</td>
      
    </tr>
   
    
  

)
}

export default table;