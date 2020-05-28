import React from 'react';
import { Nav } from "react-bootstrap"
import DropDown from "../../NavBar/DropDown"


function filterPane(){

return (
    <Nav
  
>
  <Nav.Item>
    <Nav.Link href="/products/clothing">CLOTHING</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/products/shoes">SHOES</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/products/accessories">ACCESSORIES</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/products/skincare">SKINCARE</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/products/beauty"> BEAUTY </Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <DropDown/>
  </Nav.Item>
</Nav>
)

}

export default filterPane;