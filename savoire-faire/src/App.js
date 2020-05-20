import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../src/Containers/NavBarContainer"
import Welcome from "./Pages/WelcomePage"
import DashBoard from "./Pages/DashBoard"
import Wishlist from "./Pages/WishListPage"
import NoMatch from "./Pages/NoMatch.js"


function App() {
  return (
    <Router>
    <div>
        
        <Switch>
          <Route exact path="/" component={Welcome} />
          <NavBar />
          <Route exact path="/users/buy" component={DashBoard} />
          <Route exact path="/users" component={DashBoard} />
          <Route exact path="users/products" component={Wishlist} />
          <Route exact path="users/products/:id" component={Wishlist} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
  );
}

export default App;