import React from "react"
import { CardGroup, Button, Card } from "react-bootstrap"



function breakfastCard(props){

    return (

    <div>    
   
        <Card>
  <Card.Header as="h5"> Meal </Card.Header>
    <Card.Img variant="top" src={`https://spoonacular.com/recipeImages/ ${props.imageID}-90x90.${props.imageType} `} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        <p>Cook Time: {props.cooktime} minutes</p>
        <p> Serves: {props.serving} people</p>
      </Card.Text>
      <a className="btn-info btn" href={props.sourceURL} target="_blank"> I want to cook this!</a>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Serves: {props.serving} people</small>
    </Card.Footer>
  </Card>
    </div>
    )
}

export default breakfastCard;