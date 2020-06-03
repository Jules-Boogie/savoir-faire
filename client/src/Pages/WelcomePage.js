import React, {useContext} from 'react';
import logo from '../../src/SV.png';
import '../../src/App.css';
import Hero from "../components/Hero"
import { Jumbotron, Container } from "react-bootstrap"
import Authentication from "../Utils/Context/authenticationContext"

function WelcomePage() {

  const authenticate = useContext(Authentication)
  return (
    <div className="App">
      <Hero backgroundImage="https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/43025766_70-99999999_01.jpg?ts=1555320836972&imwidth=100&imdensity=1" >
        
      </Hero>
      <Jumbotron fluid>
                    <Container>
                        <h1> Savoire Faire </h1>
                        {!authenticate.isLoggedIn && (
                        <p> Welcome to my online store. Please login to buy and explore our lifestyle Page.</p>
                        )}
                        <p> Thanks for signing in. Now you can shop and explore the lifestyle page. </p>
                    </Container>
                </Jumbotron>
    </div>
  );
}

export default WelcomePage;
