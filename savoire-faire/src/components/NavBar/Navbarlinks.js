
import Logo from "../../SV.png"
import React, { useContext } from 'react'
import AuthenticationContext from "../../Utils/Context/authenticationContext"
import { Button } from 'react-bootstrap'

function navLinks(){
  const authenticate = useContext(AuthenticationContext)
  const navPic = {
    
      maxHeight: "70px",
      maxWidth: "70%", 
      overflow: "visible",
      paddingTop: "0",
      paddingBottom: "0" 
  }

  const activePage ={
    // backgroundColor: "#00cccc",
    cursor: "pointer",
    background: "transparent",
    // background: "#f8df00",
    font: "inherit",
    color: "#292929"
  }
return (
  <div>
  <a className="navbar-brand" href="/">
  <img src={Logo} alt="Brand" style={navPic}/></a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="/products" style={activePage}> Buy </a>
      </li>
      {authenticate.loggedIn && ( 
      <li className="nav-item">
        <a className="nav-link" href="/user/:id/wishlist">Wishlist</a>
      </li>
      )}
      <li className="nav-item">
        <a className="nav-link" href="/admin/signin"> Admin</a>  
        {/* login as admin only to see */}
      </li>
      {!authenticate.loggedIn && (
      <li className="nav-item">
        <a className="nav-link" href="/authenticate"> Authenticate</a>
      </li>
      )}
      <li className="nav-item">
        <a className="nav-link" href="/admin/users"> All Users</a>
        {/* login as admin only to see */}
      </li>
      {authenticate.loggedIn && (
        <Button onClicked={authenticate.logOut}> logout  </Button>
      )}
       {authenticate.adminLogin && (
        <Button onClicked={authenticate.adminlogOut}> logout  </Button>
      )}
    </ul>
    </div>

)




}

export default navLinks;