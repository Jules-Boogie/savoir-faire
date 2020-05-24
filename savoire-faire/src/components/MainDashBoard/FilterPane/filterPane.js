import React from 'react';
import { Nav } from "react-bootstrap"


function filterPane(){

return (
    <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">CLOTHING</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">SHOES</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">ACCESSORIES</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="link-2">SKINCARE</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="link-2"> BEAUTY </Nav.Link>
  </Nav.Item>
</Nav>
)

}

export default filterPane;