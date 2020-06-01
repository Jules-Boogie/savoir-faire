import React from 'react'
import { Button,Card, Dropdown } from 'react-bootstrap'

function shoppingcartCard(props) {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Img variant="top" src={props.image} />
                <Card.Subtitle className="mb-2 text-muted">{props.quantity}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>

               <Button onClick={props.clicked}> Remove</Button>

            </Card.Body>
        </Card>
        </div>


    )
}

export default shoppingcartCard;