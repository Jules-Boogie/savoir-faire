import React from 'react';
import logo from '../../src/SV.png';
import '../../src/App.css';
import Hero from "../components/Hero"
import { Jumbotron, Container } from "react-bootstrap"

function welcomePage() {
  return (
    <div className="App">
      <Hero backgroundImage="https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/43025766_70-99999999_01.jpg?ts=1555320836972&imwidth=100&imdensity=1" >
        
      </Hero>
      <Jumbotron fluid>
                    <Container>
                        <h1> Savoire Faire </h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Container>
                </Jumbotron>
    </div>
  );
}

export default welcomePage;
