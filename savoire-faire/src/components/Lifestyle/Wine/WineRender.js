import React from 'react'
import { Card, Col, Row, ListGroup, ListGroupItem, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

function wineRender(props) {

  return (
    <div>
      <Row>
        <Col >
          <p> List of Wines for can be paired with {props.searchValue} </p>
          <ListGroup>
            {props.pairedWines.map(wine => (
              <ListGroup.Item> {wine} </ListGroup.Item>
            ))}

          </ListGroup>
          <p>
            {props.pairingText}
          </p>


        </Col>
        <Col >
          <h4> Wine Details</h4>
          {props.productMatches.map(product => (
          
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{product.averageRating}</ListGroupItem>
                  <ListGroupItem>{product.price}</ListGroupItem>
                  <ListGroupItem>{product.score}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={product.link}> More Details </Card.Link>
                  <Button onClick={props.Clicked}> </Button>
                </Card.Body>
              </Card>
            




          ))}


        </Col>
      </Row>

    </div>



  )


}

export default wineRender;