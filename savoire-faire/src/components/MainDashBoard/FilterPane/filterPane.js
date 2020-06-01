import React from 'react';
import { Nav } from "react-bootstrap"
import DropDown from "../../NavBar/DropDown"


function filterPane(){

return (
    <Nav className="text-secondary"
  
>
  <Nav.Item className="mx-auto" >
    <Nav.Link href="/products/clothing">CLOTHING</Nav.Link>
  </Nav.Item>
  <Nav.Item className="mx-auto">
    <Nav.Link href="/products/shoes">SHOES</Nav.Link>
  </Nav.Item>
  <Nav.Item className="mx-auto">
    <Nav.Link href="/products/accessories">ACCESSORIES</Nav.Link>
  </Nav.Item>
  <Nav.Item className="mx-auto">
  <Nav.Link href="/products/skincare">SKINCARE</Nav.Link>
  </Nav.Item>
  <Nav.Item className="mx-auto">
  <Nav.Link href="/products/beauty"> BEAUTY </Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <DropDown/>
  </Nav.Item>
</Nav>
)

}

export default filterPane;