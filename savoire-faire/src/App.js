import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React, { useCallback } from 'react'
import NavBar from "../src/Containers/NavBarContainer"
import Welcome from "./Pages/WelcomePage"
import DashBoard from "./Pages/MainDashBoard"
import Wishlist from "./Pages/WishListPage"
import AddProductPage from "./Pages/AddProduct"
import AdminPage from "./Pages/AdminPage"
import AllUsers from "./Pages/AllUser"
import ProductDetail from "./Pages/ProductDetail"
import AdminSignIn from "./Pages/AdminSignIn"
import Authenticate from "./Pages/Authentication"
import Wine from "./Pages/Wine"
import WineComparison from "./Pages/WineComparisonPage"
import MealPlan from "./Pages/MealPlan"
import AuthenticationContext from "./Utils/Context/authenticationContext"
// import UpdateProductPage from "./Pages/UpdateProduct"


function App() {

  const [loggedIn, setloggedIn] = useState(false)
  const [isAdmin, setisAdmin] = useState(false)

  const adminLogin = useCallback(() => {
    setisAdmin(true)
  })
  const adminLogOut = useCallback(() => {
    setisAdmin(false)
  })


  const login = useCallback(() => {
    setloggedIn(true)

  })

  const logoff = useCallback(() => {
    setloggedIn(false)

  })

  let routes;

  if (loggedIn) {
    routes = (
      <Switch>
      <Route exact={true} path="/">
        <Welcome />
      </Route>
      <Route exact path="/products">
        <DashBoard />
      </Route>
      <Route exact path="/users/winepairing">
        <Wine />
      </Route>
      <Route exact path="/users/winecomparison">
        <WineComparison />
      </Route>
      <Route exact path="/users/mealplan">
        <MealPlan />
      </Route>
      <Route exact={true} path="/products/:id">
        <ProductDetail />
      </Route>
      <Route exact path="users/:userid/products">
        <Wishlist />
      </Route>
      <Redirect to="/" />
      </Switch>
  );
  } else if (isAdmin) {
    routes = (
      <Switch>
      <Route exact path="/admin/products">
        <AdminPage />
      </Route>
      <Route exact={true} path="/admin/users">
        <AllUsers />
      </Route>
      <Route exact={true} path="/products/add">
        <AddProductPage />
      </Route>
      <Route exact={true} path="/">
        <Welcome />
      </Route>
      <Route exact path="/products">
        <DashBoard />
      </Route>
      <Route exact path="/users/winepairing">
        <Wine />
      </Route>
      <Route exact path="/users/winecomparison">
        <WineComparison />
      </Route>
      <Route exact path="/users/mealplan">
        <MealPlan />
      </Route>
      <Route exact={true} path="/products/:id">
        <ProductDetail />
      </Route>
      <Route exact path="users/:userid/products">
        <Wishlist />
      </Route>
      </Switch>

  )
  }
  else {
    routes = (
      <Switch>
      <Route exact={true} path="/">
        <Welcome />
      </Route>
      <Route exact path="/authenticate">
        <Authenticate />
      </Route>

      <Route exact path="/admin/signin">
        <AdminSignIn />
      </Route>
      <Route exact path="/products">
      <DashBoard />
    </Route>
    </Switch>
    );
  }


  const defaultContainer = () => {
    return (
      <div>
        <AuthenticationContext value={{ loggedIn: loggedIn, logIn: login, logOut: logoff, isAdmin: isAdmin, adminLogin: adminLogin }}>
          <NavBar />
          <main >
            <Switch>
              <Route exact={true} path="/">
                <Welcome />
              </Route>
              <Route exact path="/admin/products">
                <AdminPage />
              </Route>
              <Route exact path="/admin/signin">
                <AdminSignIn />
              </Route>
              <Route exact path="/authenticate">
                <Authenticate />
              </Route>
              <Route exact path="/products">
                <DashBoard />
              </Route>
              <Route exact path="/users/winepairing">
                <Wine />
              </Route>
              <Route exact path="/users/winecomparison">
                <WineComparison />
              </Route>
              <Route exact path="/users/mealplan">
                <MealPlan />
              </Route>
              <Route exact={true} path="/admin/users">
                <AllUsers />
              </Route>

              <Route exact={true} path="/products/add">
                <AddProductPage />
              </Route>

              <Route exact={true} path="/products/:id">
                <ProductDetail />
              </Route>

              <Route exact path="users/:userid/products">
                <Wishlist />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </AuthenticationContext>
      </div>
    )
  }

  return (
    <Router>
      <Switch>

        <Route component={defaultContainer} />

      </Switch>
    </Router>


  )

}





export default App;