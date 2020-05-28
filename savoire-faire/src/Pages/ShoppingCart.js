import React, { useEffect, useState } from 'react';
import ShoppingcartCard from "../../src/components/MainDashBoard/ShoppingCart/Shoppingcartlist"
import API from "../Utils/API/Users/API_Users"
import { PageItem } from 'react-bootstrap';
import { useParams } from "react-router-dom"


function ShoppingCartPage(){
    const userId =  useParams().id;

    // whenever a user adds an order to the shopping cart it should appear here
    const [items, setItems] = useState([])
    
   

     const handleRemoveBtn = (id) =>{
         const items = [...items]
      const  updatedCart = items.filter(Cartitem =>{
          return  Cartitem.item !== id
        })
        setItems(updatedCart)
        
        
     }

     const loadCartitems =(id)=>{
        API.populateUserCart(id)
        .then(res=> setItems(res.data))
        .catch(err => console.log(err));
     }

     useEffect(() => {
        loadCartitems(userId)
     },[])


   

     return (
<div>
         {items.map(item => {
            <ShoppingcartCard
            key={item._id}
            quantity={item.item}
            price={item.price}
    
             />
         })}
             
             </div>   
     )

   
}

export default ShoppingCartPage;