import React, { useEffect, useContext, useState } from 'react';
import ShoppingcartCard from "../../src/components/MainDashBoard/ShoppingCart/Shoppingcartlist"
import API from "../Utils/API/Users/API_Users"
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom"
import AuthenticateContext from "../Utils/Context/authenticationContext"



function ShoppingCartPage() {
   //  const userId =  useParams().id;

   const authenticate = useContext(AuthenticateContext)
   const [user, setUser] = useState("")

   const [itemQuantity, setItemQuantity] = useState(0)




   // whenever a user adds an order to the shopping cart it should appear here
   const [items, setItems] = useState([])



   const handleRemoveBtn = (userid, prodid) => {
      // const items1 = [...items]
      // const updatedCart = items1.filter(Cartitem => {
      //    return Cartitem.itemId !== id
      // })
      // setItems(updatedCart)
      API.removeUsercart(userid, {prodid})

   }

   const loadCartitems = (id) => {
      API.populateUserCart(id)
         .then(res => {
            console.log(res.data.cart.items.length)
            setItems(res.data.cart.items)
            setItemQuantity(res.data.cart.items.length)
         })
         .catch(err => console.log(err));
   }





   return (
      <div>



         <AuthenticateContext.Consumer>
            {(context) =>

               <div>
                  <h4 className="display-5 danger container text-center"> Shopping Cart </h4>
                  <div className="container text-center">
                  <button className=" text-center" onClick={() => loadCartitems(authenticate.userId)}>Load Cart items</button>
                  </div>
                  {items.map((item,id) => {
                     return (
                        <ShoppingcartCard
                           key={item.itemId._id}
                           image={item.itemId.Image}
                           title={item.itemId.Name}
                           quantity={itemQuantity}
                           price={item.itemId.Price}
                           clicked={() => handleRemoveBtn(authenticate.userId, item.itemId._id)}
                        />
                     )
                  })}
               </div>
            }

         </AuthenticateContext.Consumer>
        <div className="container text-center">
            <a className="btn-secondary btn-lg btn-block"> CHECKOUT </a>
            </div>


      </div>
   )


}

export default ShoppingCartPage;