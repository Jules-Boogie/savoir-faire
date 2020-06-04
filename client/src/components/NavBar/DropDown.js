
import { Dropdown } from "react-bootstrap"
import AuthenticationContext from "../../Utils/Context/authenticationContext"
import React, {useContext} from 'react'


function DropDown(){
  const authenticate = useContext(AuthenticationContext)

    return(

        <div>
           {authenticate.isLoggedIn && (
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    LifeStyle
  </Dropdown.Toggle>

  <Dropdown.Menu>
   
    <Dropdown.Item href="/users/winepairing"> Wine Pairing </Dropdown.Item>
  
   
    <Dropdown.Item href="/users/winecomparison"> Wine Comparison </Dropdown.Item>
    
    <Dropdown.Item href="/users/mealplan">Meal Plan</Dropdown.Item>
   

    
    
  </Dropdown.Menu>
</Dropdown>
           )} 





        </div>
    )




}

export default DropDown;