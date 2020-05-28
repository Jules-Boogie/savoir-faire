
import { Dropdown } from "react-bootstrap"
import AuthenticationContext from "../../Utils/Context/authenticationContext"
import React, {useContext} from 'react'


function DropDown(){
  const authenticate = useContext(AuthenticationContext)

    return(

        <div>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    LifeStyle
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {authenticate.loggedIn && (
    <Dropdown.Item href="/users/winepairing"> Wine Pairing </Dropdown.Item>
    )}
    {authenticate.loggedIn && (
    <Dropdown.Item href="/users/winecomparison"> Wine Comparison </Dropdown.Item>
    )}
    {authenticate.loggedIn && (
    <Dropdown.Item href="/users/mealplan">Meal Plan</Dropdown.Item>
    )}
    {authenticate.loggedIn && (
    <Dropdown.Item href="#/action-3"> Health and Fashion </Dropdown.Item>
    )}
  </Dropdown.Menu>
</Dropdown>





        </div>
    )




}

export default DropDown;