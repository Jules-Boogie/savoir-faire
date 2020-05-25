import React from "react"
import { CardGroup, Button, Card } from "react-bootstrap"



function breakfastCard(props){

    return (

    <div>    
   
        <Card>
  <Card.Header as="h5">BreakFast</Card.Header>
    <Card.Img variant="top" src={`https://spoonacular.com/productImages ${props.imageID}  -90x90. ${props.imageType} `} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        <p>Cook Time: {props.cooktime} minutes</p>
        <p> Serves: {props.serving} people</p>
      </Card.Text>
      <Button href={props.sourceURL} variant="primary"> I want to cook this!</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Serves: {props.serving} people</small>
    </Card.Footer>
  </Card>
    </div>
    )
}

export default breakfastCard;