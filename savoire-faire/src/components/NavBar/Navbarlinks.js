import React from 'react';


function navLinks(){
return (

    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Buy <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a classname="nav-link" href="#">Sell</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My Likes</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop By Category
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#"> Clothing</a>
          <a className="dropdown-item" href="#"> Beauty </a>
          <a className="dropdown-item" href="#"> Home/LifeStyle</a>
        </div>
      </li>

    </ul>

)




}

export default navLinks;