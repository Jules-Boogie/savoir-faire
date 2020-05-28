
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React, { useCallback, useState } from 'react'
import NavBar from "../src/Containers/NavBarContainer"
import Welcome from "./Pages/WelcomePage"
import DashBoard from "./Pages/MainDashBoard"
import Clothing from "./Pages/Clothing"
import Shoes from "./Pages/Shoes"
import Accessories from "./Pages/Accessories"
import SkinCare from "./Pages/SkinCare"
import Beauty from "./Pages/Beauty"
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
import ShoppingCartPage from "./Pages/ShoppingCart"
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
        <Route exact path="/users/:id/products">
          <Wishlist />
        </Route>
        <Route exact path="/users/:id/cart">
          <ShoppingCartPage />
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
        <Route exact path="users/:id/products">
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
        <Route exact path="/products/accessories">
          <Accessories />
        </Route>
        <Route exact path="/products/shoes">
          <Shoes />
        </Route>
        <Route exact path="/products/beauty">
          <Beauty />
          </Route>
          <Route exact path="/products/skincare">
            <SkinCare />
          </Route>
       
        <Route exact path="/products/clothing">
          <Clothing />
        </Route>
        <Route exact path="/admin/products">
          <AdminPage />
        </Route>
        <Route exact={true} path="/admin/users">
          <AllUsers />
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
        <Route exact path="/users/:id/cart">
          <ShoppingCartPage />
        </Route>
      </Switch>
    );
  }


  // const defaultContainer = () => {
  //   return (
  //     <div>
  //       <AuthenticationContext.Provider value={{ loggedIn: loggedIn, logIn: login, logOut: logoff, isAdmin: isAdmin, adminLogin: adminLogin }}>
  //         <NavBar />
  //         <main >

  //             {/* <Route exact={true} path="/">
  //               <Welcome />
  //             </Route>
  //             <Route exact path="/admin/products">
  //               <AdminPage />
  //             </Route>
  //             <Route exact path="/admin/signin">
  //               <AdminSignIn />
  //             </Route>
  //             <Route exact path="/authenticate">
  //               <Authenticate />
  //             </Route>
  //             <Route exact path="/products">
  //               <DashBoard />
  //             </Route>
  //             <Route exact path="/users/winepairing">
  //               <Wine />
  //             </Route>
  //             <Route exact path="/users/winecomparison">
  //               <WineComparison />
  //             </Route>
  //             <Route exact path="/users/mealplan">
  //               <MealPlan />
  //             </Route>
  //             <Route exact={true} path="/admin/users">
  //               <AllUsers />
  //             </Route>
  //             <Route exact path="/users/:id/cart">
  //               <ShoppingCartPage />
  //             </Route>
  //             <Route exact={true} path="/products/add">
  //               <AddProductPage />
  //             </Route>

  //             <Route exact={true} path="/products/:id">
  //               <ProductDetail />
  //             </Route>

  //             <Route exact path="users/:userid/products">
  //               <Wishlist />
  //             </Route>
  //             <Redirect to="/" /> */}
  //           {routes}
  //         </main>
  //       </AuthenticationContext.Provider>
  //     </div>
  //   )
  // }

  return (
    <Router>
      <div>
        <AuthenticationContext.Provider value={{ loggedIn: loggedIn, logIn: login, logOut: logoff, isAdmin: isAdmin, adminLogin: adminLogin }}>
          <NavBar />
          <main >


            {routes}


          </main>
        </AuthenticationContext.Provider>
      </div>
    </Router>


  )

}





export default App;