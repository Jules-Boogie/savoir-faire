import React, { useState, useEffect, Component } from 'react';

import ItemList from '../components/MainDashBoard/ItemForDashBoard/ItemList'
import SortPage from "../components/MainDashBoard/FilterPane/sortDropDown"
import API from "../Utils/API/Products/API_product"


function ShoesPage () {

    const [item, setItem] = useState([])
    const [value, setValue] = useState('highest')

    // define states 
    
    // define methods 
    useEffect(()=>{
        loadShoes()

    },[])


    const loadShoes =()=>{
    API.getShoes()
    .then(res => setItem(res.data))
    }

// const item = [{
//     id:"c2",
//     name:"Pleated floral dress",
//     price:"US$35.99",
//     image:"https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41087034_85.jpg?ts=1551278025957&imwidth=100&imdensity=1",
//     type:"Dress",
//     date:"May 5th"
    
//     },
//     {
//     id:"c3",
//     name:"Vichy check dress",
//     price:"US$22.99",
//     image:"https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43037717_43_D6.jpg?ts=1553794677981&imwidth=100&imdensity=1",
//     type:"Dress",
//     date:"May 6th"
//     },{
//     id:"c4",
//     name:"Printed long dress",
//     price:"US$12.99",
//     image:"https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41077802_15.jpg?ts=1553778807631&imwidth=100&imdensity=1",
//     type:"Dress",
//     date:"May 13th"
    
    
//     }]
const handleChange = (event) => {
    setValue(event.target.value)
    if (value === "lowest") {
        console.log("lowest")
        const itemHighest = [...item]
        itemHighest.sort((first, second) => ( second.Price - first.Price ))
        setItem(itemHighest)
    } else if (value === "highest") {
        console.log("highest")
        const itemlowest = [...item]
        itemlowest.sort((first, second) => (first.Price - second.Price))
        setItem(itemlowest)

    } else if (value === "newest") {
        console.log("newest")
        const itemnewest = [...item]
        itemnewest.sort((first, second) => (first.Date - second.Date))
        setItem(itemnewest)
    } else if (value === "loved") {
        console.log("loved")
        const itemloved = [...item]
        itemloved.sort((first, second) => (second.Fans.length - first.Fans.length))
        setItem(itemloved)
    } else {
        const itemDefault = [...item]
        setItem(itemDefault)

    }
}
    
    
    
    
    return (
    
       
        <div>
        <SortPage
        change={handleChange}
        value={value}
        />
   <ItemList title="Shoes" items={item}/>
   
   
   </div>  
    
    
    )
    
    
    
}



export default ShoesPage;