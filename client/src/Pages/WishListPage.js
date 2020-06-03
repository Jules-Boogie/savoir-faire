import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom"
import API from '../Utils/API/Users/API_Users';
import Profile from "../Pages/UserProfile"
import ItemCard from "../components/WishlistComponent/WishlistCard"
import AuthenticateContext from "../Utils/Context/authenticationContext"
import { CardGroup } from 'react-bootstrap'

function WishListPage(props) {

  const authenticate = useContext(AuthenticateContext)
  const [user, setUser] = useState("")

  // const userId =  useParams().id;
  const { productid } = useParams()

  const [items, setItems] = useState([])

  const loadFavorites = (id) => {
    API.populateUserFavorites(id)
      .then(res => (console.log(res.data.favorites),
        setUser(res.data),
        setItems(res.data.favorites)))
      .catch(err => console.log(err));
  }

  // function defaultPage() {
  //   if (items.length === 0) {
  //     return (
  //       <div className="container">
  //         <h3 className="display-4"> You do not have favorites yet. Please go back and like an item to have items added to the list!
  //             </h3>

  //         <div className="container">
  //           <ul>
  //             <li>
  //               <a href="/products/clothing"> Check out Clothing</a>
  //             </li>
  //             <li>
  //               <a href="/products/shoes"> Check out Shoes</a>
  //             </li>
  //             <li>
  //               <a href="/products/accessories"> Check out Accessories</a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     )

  //   }
  //    {
  //   return (
      
      
  //   )
  // }
  // }





  const handleRemoveBtn = (uid, id) => {
    console.log("clicked")
    API.removeUserfavorite(uid, { id })
      .then(API.populateUserFavorites(uid)
        .then(res => (console.log(res.data.favorites),
          setUser(res.data),
          setItems(res.data.favorites))))
  }


  // so finduserby userid and pop
  return (
    <div className="row">

      <AuthenticateContext.Consumer>
        {(context) => 
        <div>
        <div className="container text-center">
          <button className=" text-center" onClick={() => loadFavorites(authenticate.userId)}> Click to See Favorites List</button>
        </div>
        <div className="container col">
          
              <CardGroup>
              {items.map((item) => {
            return (
                <ItemCard
                  // clicked={props.click}
                  id={item._id}
                  key={item._id}
                  Name={item.Name}
                  Price={item.Price}
                  Image={item.Image}
                  Type={item.itemType}
                  Date={item.Date}
                  clicked={() => handleRemoveBtn(authenticate.userId, item._id)}


                />
                )
              })}
              </CardGroup>
         
        </div>
      </div>
}
      </AuthenticateContext.Consumer>


    </div>


  )






}

export default WishListPage;