import React from 'react'
import { Card, Col, Row, ListGroup, ListGroupItem, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

const style={
  fontFamily:" 'Roboto', sans-serif"
}

function wineRender(props) {

  

  return (
    <div>
      <Row>
        <Col >
         
          <ListGroup>
            {props.pairedWines.map(wine => (
              <ListGroup.Item> {wine} </ListGroup.Item>
            ))}

          </ListGroup>
          <p className="container" style={style}>
            {props.pairingText}
          </p>


        </Col>
        <Col >
          
          {props.productMatches.map(product => (
          
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={style}>
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{product.averageRating}</ListGroupItem>
                  <ListGroupItem>{product.price}</ListGroupItem>
                  <ListGroupItem>{product.score}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={product.link} target="_blank" > More Details </Card.Link>
                
                </Card.Body>
              </Card>
            




          ))}


        </Col>
      </Row>

    </div>



  )


}

export default wineRender;