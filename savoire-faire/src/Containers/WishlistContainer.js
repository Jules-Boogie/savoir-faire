import React from 'react';
import ItemCard from "../components/WishlistComponent/WishlistCard"
import { CardGroup } from "react-bootstrap"

// import all wishlist components when ready


function wishlistContainer(props){

    return (

        <div>
      
           <CardGroup className="container"> 
                {props.items.map(item => (
                    <ItemCard clicked={props.click}
                    id={item._id}
                        key={item._id}
                        Name={item.Name}
                        Price={item.Price}
                        Image={item.Image}
                        Type={item.itemType}
                        Date={item.Date}
                    />

                ))}
            </CardGroup> 

                   </div>
    )



}

export default wishlistContainer;