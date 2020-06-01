
import React from 'react';
import ItemCard from "./ItemCard"
import { CardGroup } from 'react-bootstrap';


function itemList(props){

    return (
        <div>
            
                
                    <div className="jumbotron text-center jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4"> Shop All {props.title} </h1>
                            <p className="lead"> Use the Sort Tool Above to Narrow Items by Price, Popularity, and Added Date </p>
                        </div>
                    </div>

               <CardGroup  love={props.like} className="container">
                    {props.items.map(item => (
                        <ItemCard
                        id={item._id}
                            key={item._id}
                            Name={item.Name}
                            Price={item.Price}
                            Image={item.Image}
                            Type={item.itemType}
                            Date={item.Date}
                            Fan={item.Fans.length}

                        />

                    ))}
                </CardGroup>

                       </div>
           
)


}

export default itemList;
