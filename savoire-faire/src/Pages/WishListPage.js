import React, {useState, useEffect} from 'react';
import WishlistContainer from "../Containers/WishlistContainer"
import { useParams } from "react-router-dom"
import API from '../Utils/API/Users/API_Users';





// define states 

// define methods 

function WishListPage() {
  const userId =  useParams().id;

  const [items, setItems] = useState([])

  const loadFavorites = (id) =>{
    API.populateUserFavorites(id)
    .then(res => setItems(res.data))
    .catch(err => console.log(err));
  }
  useEffect(() => {
    loadFavorites(userId)
  })
   const handleRemoveBtn=(id)=>{
    API.removeUserfavorite({id}, {
      
    })
   }
 

  // so finduserby userid and pop
return (
<div>
   <WishlistContainer items={items}
   clicked
   />


</div>


)






}

export default WishListPage;