import React, { Component } from 'react';

import ItemList from '../components/MainDashBoard/ItemForDashBoard/ItemList'
import SortPage from "../components/MainDashBoard/FilterPane/filterPane"



function BeautyPage () {

// define states 

// define methods 



const item = [{
    id:"c2",
    name:"Pleated floral dress",
    price:"US$35.99",
    image:"https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41087034_85.jpg?ts=1551278025957&imwidth=100&imdensity=1",
    type:"Dress",
    date:"May 5th"
    
    },
    {
    id:"c3",
    name:"Vichy check dress",
    price:"US$22.99",
    image:"https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/43037717_43_D6.jpg?ts=1553794677981&imwidth=100&imdensity=1",
    type:"Dress",
    date:"May 6th"
    },{
    id:"c4",
    name:"Printed long dress",
    price:"US$12.99",
    image:"https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41077802_15.jpg?ts=1553778807631&imwidth=100&imdensity=1",
    type:"Dress",
    date:"May 13th"
    
    
    }]
    
    
    
    
    return (
    
       
        <div>
        <SortPage/>
   <ItemList items={item}/>
   
   
   </div>  
    
    
    
    )
    
    
    }



export default BeautyPage;