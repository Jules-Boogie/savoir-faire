import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../src/Containers/NavBarContainer"
import Welcome from "./Pages/WelcomePage"
import DashBoard from "./Pages/MainDashBoard"
import Wishlist from "./Pages/WishListPage"
import AddProductPage from "./Pages/AddProduct"
import AdminPage from "./Pages/AdminPage"
import AllUsers from "./Pages/AllUser"
import ProductDetail from "./Pages/ProductDetail"
import UpdateProductPage from "./Pages/UpdateProduct"


function App() {

  const main = {
    marginTop: "5rem"
  }

  const welcomeContainer = () => {
    return (
    <div>
            <Route exact={true} path="/">
              <Welcome />
            </Route>
          </div>
    )
    }
    //cant figure out how to hide navbar from welcome page.
    //will neeed it for sign in page as well 
    const defaultContainer = () => {
    return (
    <div>
            <NavBar />
            <main style={main}>
              <Switch>
                <Route exact path="/admin/products">
                  <AdminPage />
                </Route>
                <Route exact path="/products">
                  <DashBoard />
                </Route>
                <Route exact={true} path="/admin/users">
                  <AllUsers />
                </Route>
    
    
                <Route exact path="/user/:id/products">
                  < Wishlist />
                </Route>
                <Route exact={true} path="/update/products/id">
                  <UpdateProductPage />
                </Route>

                <Route exact={true} path="/products/add">
                  <AddProductPage />
                </Route>

                <Route exact={true} path="/products/id">
                  <ProductDetail />
                </Route>
    
                <Route exact path="users/id/products/:id">
                  <Wishlist />
                </Route>
                <Redirect to="/" />
              </Switch>
            </main>
          </div>
    )
    }

  return (
    <Router>
    <Switch>
      <div>
      <Route exact path = "/" component={welcomeContainer} />
      <Route  component={defaultContainer} />
      </div>
      </Switch>
    </Router>


  )

}
  

    


export default App;