
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
import AdminPage from "./Pages/AdminPage"
import AllUsers from "./Pages/AllUser"
import ProductDetail from "./Pages/ProductDetail"
import AdminSignIn from "./Pages/AdminSignIn"
import Wine from "./Pages/Wine"
import WineComparison from "./Pages/WineComparisonPage"
import MealPlan from "./Pages/MealPlan"
import AuthenticationContext from "./Utils/Context/authenticationContext"
import ShoppingCartPage from "./Pages/ShoppingCart"

import Footer from "./components/Footer/footer"
import Signin from "./components/SignUpsignInForm/signin"
import Signup from "./components/SignUpsignInForm/signup"
import {Auth} from "./Utils/Auth/Auth"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/BackDrop/Backdrop"
import UserProfile from "./Pages/UserProfile"
import FilterPane from "./components/MainDashBoard/FilterPane/filterPane"

// import UpdateProductPage from "./Pages/UpdateProduct"


function App() {

  const style = {
    backgroundImage: "url(" + "https://previews.123rf.com/images/apostrophe/apostrophe1510/apostrophe151000116/47454426-orange-yellow-background-with-vintage-grunge-background-texture-design-old-faded-paper-distressed-wo.jpg" +")",
    marginTop:"64px"
  }

  
  
 

  const { token, login, adminLogin, logout, userId, adtoken, adminLogout } = Auth();




 

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route exact={true} path="/">
          <Welcome />
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
        <Route exact path="/users/profile"> 
       <UserProfile/>
       </Route>
        <Route exact path="/users/wishlist/">
          <Wishlist />
        </Route>
        <Route exact path="/users/wishlist/products/:productid">
          <Wishlist />
        </Route>
        <Route exact path="/users/cart">
          <ShoppingCartPage />
        </Route>
        <Route exact path="/signin">
          <Signin />
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
          <Route exact={true} path="/users/products/:id" >
            <ProductDetail/>
            </Route>
        <Route exact path="/products/clothing">
          <Clothing />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else if (adtoken) {
    routes = (
      <Switch>
        <Route exact path="/admin/products">
          <AdminPage />
        </Route>
        <Route exact={true} path="/admin/users">
          <AllUsers />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductDetail />
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
        <Route exact path="/products/clothing">
          <Clothing />
          </Route>
        <Route exact path="/products/beauty">
          <Beauty />
          </Route>
          <Route exact path="/products/skincare">
            <SkinCare />
          </Route>
          <Route exact={true} path="/users/products/:id" component={ProductDetail} />
        <Route exact path="/products/clothing">
          <Clothing />
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
       
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
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
          <Route exact={true} path="/users/products/:id" >
            <ProductDetail/>
            </Route>
          {/* <Route exact={true} path="/users/products/:id" component={ProductDetail} /> */}
        <Route exact path="/products/clothing">
          <Clothing />
        </Route>
        {/* <Route exact path="/admin/products">
          <AdminPage />
        </Route> */}
        {/* <Route exact={true} path="/admin/users">
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
        <Route exact path="/users/:id/checkout">
          <CheckoutPage />
        </Route> */}
      </Switch>
    );
  }


  

  return (
    <Router>
      <div style={{height:"100%"}}>
        <AuthenticationContext.Provider value={{  isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout, isAdmin: !!adtoken, adminLogin: adminLogin, adminLogout:adminLogout  }}>
          <NavBar  />
          <FilterPane/>
         
          <main style={style} >


            {routes}


          </main>
         {/* <Footer/> */}
        </AuthenticationContext.Provider>
      </div>
    </Router>


  )

}





export default App;