
import Logo from "../../SV.png"
import React, { useContext } from 'react'
import AuthenticationContext from "../../Utils/Context/authenticationContext"
import { Dropdown, DropdownButton, Button } from 'react-bootstrap'
import Css from "./nav.css"

function NavLinks() {
  const authenticate = useContext(AuthenticationContext)
  const navPic = {

    maxHeight: "70px",
    maxWidth: "70%",
    overflow: "visible",
    paddingTop: "0",
    paddingBottom: "0"
  }

  const activePage = {
    // backgroundColor: "#00cccc",
    cursor: "pointer",
    background: "transparent",
    // background: "#f8df00",
    font: "inherit",
    color: "#292929"
  }
  return (
    <div className={Css.navlink}>
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="Brand" style={navPic} /></a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/products" style={activePage}> Buy </a>
        </li>
        {authenticate.isLoggedIn && (
          <li className="nav-item">
            <a className="nav-link" href="/users/wishlist">Wishlist</a>
          </li>
        )}

        {authenticate.isLoggedIn && (
          <li className="nav-item">
            <a className="nav-link" href="/users/cart"> Cart </a>
          </li>
        )}
        {authenticate.isLoggedIn && (
          <li className="nav-item">
            <a className="nav-link" href="/users/profile"> Profile </a>
          </li>
        )}

        {!authenticate.isAdmin && (
          <li className="nav-item">
            <a className="nav-link" href="/admin/signin"> Admin</a>
          </li>
        )}

        {authenticate.isAdmin && (
          <li className="nav-item">
            <a className="nav-link" href="/admin/product"> Admin Product</a>
          </li>
        )}

        {authenticate.isAdmin && (
          <li className="nav-item">
            <a className="nav-link" href="/admin/users"> Admin</a>
          </li>
        )}
        {authenticate.isAdmin && (
          <li className="nav-item">
            <a className="nav-link" href="/admin/users"> All Users</a>
            {/* login as admin only to see */}
          </li>
        )}
        {authenticate.isAdmin && (
          <Button onClick={authenticate.logout}> logout  </Button>
        )}


        {!authenticate.isLoggedIn && (
          <DropdownButton variant="secondary" id="dropdown-basic-button" title="Authenticate">
            <Dropdown.Item href="/signin"> Login</Dropdown.Item>
            <Dropdown.Item href="signup">Register</Dropdown.Item>

          </DropdownButton>
        )}

{/* 
        {!authenticate.isAdmin && (
          <DropdownButton variant="secondary" id="dropdown-basic-button" title="Authenticate">
            <Dropdown.Item href="/signin"> Login</Dropdown.Item>
            <Dropdown.Item href="signup">Register</Dropdown.Item>

          </DropdownButton>
        )} */}
        {authenticate.isLoggedIn && (
          <li className="nav-item">
            <a className="nav-link" href="/users/checkout"> checkout </a>
          </li>
        )}


        {authenticate.isLoggedIn && (
          <Button onClick={authenticate.logout}> logout  </Button>
        )}


      </ul>
    </div>

  )




}

export default NavLinks;