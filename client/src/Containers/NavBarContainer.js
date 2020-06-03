// searchbar
//link to favorites or saved in heart icon
//logo
// user profile pic with dropdown(purchases page, account settings, logout)
//notification with bell icon

import React, { Component } from 'react';
import SearchForm from "../components/NavBar/SearchForm"
import NavLinks from "../components/NavBar/Navbarlinks"
import FilterPane from "../components/MainDashBoard/FilterPane/filterPane"
import SideDrawerbtn from "../components/SideDrawer/Button"
import Css from "../components/NavBar/nav.css"


function NavBar(props){


        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                
                <NavLinks ></NavLinks>
                {/* <SearchForm {...props}></SearchForm> */}
                {/* <FilterPane /> */}
            </nav>

        )


   
}

export default NavBar;

