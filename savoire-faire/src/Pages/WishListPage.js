import React from 'react';
import WishlistContainer from "../Containers/WishlistContainer"
import { useParams } from "react-router-dom"




// define states 

// define methods 

function WishListPage() {
  const userId =  useParams().userid;

  // we want to retrieve all of the user's wishlist item. using their id. 

  // so finduserby userid and pop
return (
<div>
   <WishlistContainer />


</div>


)






}

export default WishListPage;