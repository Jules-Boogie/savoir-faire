import React, { useState, Component, useEffect } from 'react';
import ItemList from "../components/AdminSellerComponent/Item"
import AddItemBtn from "../components/AdminSellerComponent/AdditemBTN"
import API from "../Utils/API/Products/API_product"





function AdminPage() {

  const [item, setItem] = useState([])

  // define states 
  
  // define methods 
  useEffect(()=>{
      loadAllItems()

  })


  const loadAllItems =()=>{
  API.getProducts()
  .then(res => setItem(res.data))
  }




return (

  <div>
<AddItemBtn />
   
<ItemList items={item}/>



</div>  
)


}





export default AdminPage;