import React, {useContext} from 'react';
import AuthenticationContext from '../../Utils/Context/authenticationContext'
import {DropdownButton, Dropdown, Button} from 'react-bootstrap'
// import UserProfile from '../../Pages/UserProfile'

let style={
height: "100%",
background: "white",
boxShadow:"2px 0px 5px rgba (0,0,0,0.5)",
position: "fixed",
width:"70%",
maxWidth:"400px",
top:0,
left:0,
zIndex:200,
transform:"translateX(-100%)",
transition:"transform 0.4s  ease out"
}

const style2={
transform: "translateX(0)"
}



function SideDrawer(props){
    const authenticate = useContext(AuthenticationContext)
    if(props.show){
        style = style2
    }

    return (
    <nav style={style}>
        {/* <UserProfile/> */}
         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/products" > Buy </a>
        </li>
        {authenticate.loggedIn && ( 
        <li className="nav-item">
          <a className="nav-link" href="/users/:id/products">Wishlist</a>
        </li>
        )} 

        {authenticate.loggedIn && ( 
        <li className="nav-item">
          <a className="nav-link" href="/users/:id/cart"> Cart </a>
        </li>
         )} 
        <li className="nav-item">
          <a className="nav-link" href="/admin/signin"> Admin</a>
          {/* login as admin only to see */}
        </li>
        {!authenticate.loggedIn && ( 
        <DropdownButton id="dropdown-basic-button" title="Authenticate">
          <Dropdown.Item href="/signin"> Login</Dropdown.Item>
          <Dropdown.Item href="signup">Register</Dropdown.Item>
          
        </DropdownButton>
        )}
        {authenticate.loggedIn && ( 
        <li className="nav-item">
          <a className="nav-link" href="/users/:id/checkout"> checkout </a>
        </li>
        )}
        <li className="nav-item">
          <a className="nav-link" href="/admin/users"> All Users</a>
          {/* login as admin only to see */}
        </li>

        {authenticate.loggedIn && ( 
        <Button onClick={authenticate.logOut}> logout  </Button>
        )}
        

      </ul>
    </nav>
    )

}

export default SideDrawer;