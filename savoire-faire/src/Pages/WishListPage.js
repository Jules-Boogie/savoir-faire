import React, { useState, useContext, useEffect } from 'react';
import WishlistContainer from "../Containers/WishlistContainer"
import { useParams } from "react-router-dom"
import API from '../Utils/API/Users/API_Users';
import Profile from "../Pages/UserProfile"
import AuthenticateContext from "../Utils/Context/authenticationContext"

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

  // useEffect(() => {

  //   loadFavorites()
  // }, [])




  const handleRemoveBtn = (uid) => {
    console.log("clicked")
  API.removeUserfavorite(uid, {productid}
    )
  }


  // so finduserby userid and pop
  return (
    <div className="row">
      
      <AuthenticateContext.Consumer>
        {(context) =>
          <div>
            <div className="container text-center">
              <button className=" text-center" onClick={() => loadFavorites(authenticate.userId)}> See Favorites List</button>
            </div>
            <div className="col">
              <Profile />
            </div>
            <div className="container col">

              <WishlistContainer items={items}
                click={() => handleRemoveBtn(authenticate.userId)}
              />

            </div>
            
          </div>
        }
      </AuthenticateContext.Consumer>


    </div>


  )






}

export default WishListPage;