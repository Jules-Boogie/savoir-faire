import React, { useState } from 'react';
import ShoppingcartCard from "../../src/components/MainDashBoard/ShoppingCart/Shoppingcartlist"


function ShoppingCartPage(){

    // whenever a user adds an order to the shopping cart it should appear here
    const [items, setItems] = useState({
        items: []
       
    })
    // const [itemCount, setItemCount] = useState({
    //     itemCount:0
    // })
    const [totalitems, setTotalitems] = useState({
        totalitems:0
    })
     const [totalPrice, setTotalPrice] = useState({
            totalPrice:0
     })

     return (
         <ShoppingcartCard/>
     )

   
}

export default ShoppingCartPage;