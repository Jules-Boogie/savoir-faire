import React from "react"
import { CardGroup, Button, Card } from "react-bootstrap"



function dinnerCard(props){

    return (

   <div>  
        <Card>
  <Card.Header as="h5"> Meal for the day </Card.Header>
    <Card.Img variant="top" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/2-chef-susan-jenkins.jpg" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        <p>Cook Time: {props.cooktime}</p>
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

export default dinnerCard;