// searchbar
//link to favorites or saved in heart icon
//logo
// user profile pic with dropdown(purchases page, account settings, logout)
//notification with bell icon

import React, { Component } from 'react';
import SearchForm from "../components/NavBar/SearchForm"
import NavLinks from "../components/NavBar/Navbarlinks"

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                {/* Navbar content  */}
                <NavLinks></NavLinks>
                <SearchForm></SearchForm>
            </nav>

        )


    }
}

export default NavBar;

