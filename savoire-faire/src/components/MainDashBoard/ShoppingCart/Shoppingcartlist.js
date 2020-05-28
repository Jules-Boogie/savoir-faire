import React from 'react'
import { DropdownButton,Card, Dropdown } from 'react-bootstrap'

function shoppingcartCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.quantity}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>

                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1"> Remove All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"> Reduce </Dropdown.Item>
                    <Dropdown.Item href="#/action-3"> Increase</Dropdown.Item>
                </DropdownButton>

            </Card.Body>
        </Card>


    )
}

export default shoppingcartCard;