import React from 'react'
import { Dropdown } from "react-bootstrap"



function dropDown(){

    return(

        <div>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    LifeStyle
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/users/winepairing"> Wine Pairing </Dropdown.Item>
    <Dropdown.Item href="/users/winecomparison"> Wine Comparison </Dropdown.Item>
    <Dropdown.Item href="/users/mealplan">Meal Plan</Dropdown.Item>
    <Dropdown.Item href="#/action-3"> Fashion </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>





        </div>
    )




}

export default dropDown;