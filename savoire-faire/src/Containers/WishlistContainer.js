import React from 'react';
import ItemCard from "../components/WishlistComponent/WishlistCard"
import { CardGroup } from "react-bootstrap"

// import all wishlist components when ready


function wishlistContainer(props){

    return (

        <div>
        {props.items.length ? (
            
                <div className="jumbotron text-center jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4"> All Saved Items </h1>
                        <p className="lead">This is where all your favorite items have been saved.</p>
                    </div>
                </div>

                ) : (
                <h4> No Saved Items </h4>
                )}
           <CardGroup>
                {props.items.map(item => (
                    <ItemCard
                        key={item.id}
                        Name={item.name}
                        Price={item.price}
                        Image={item.image}
                        Type={item.type}
                        Date={item.date}
                    />

                ))}
            </CardGroup>

                   </div>
    )



}

export default wishlistContainer;