import React from 'react';
import Logo from "../../SV.png"


function navLinks(){
  const navPic = {
    
      maxHeight: "70px",
      maxWidth: "70%", 
      overflow: "visible",
      paddingTop: "0",
      paddingBottom: "0" 
  }
return (
  <div>
  <a className="navbar-brand" href="/">
  <img src={Logo} alt="Brand" style={navPic}/></a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="/users/buy">Buy </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="users/products">Likes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="users/sell">Sell</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop By Category
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#"> Clothing</a>
          <a className="dropdown-item" href="#"> Beauty </a>
          <a className="dropdown-item" href="#"> Home/LifeStyle</a>
        </div>
      </li>

    </ul>
    </div>

)




}

export default navLinks;