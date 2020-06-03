
import React from 'react';
import ItemCard from "./ItemCard"
import { CardGroup } from 'react-bootstrap';
import AddItemBtn from "./AdditemBTN"


function itemList(props){

    return (
        <div>
            {props.items.length ? (
                
                    <div className="jumbotron text-center jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4"> Items Listed for Sale</h1>
                            <p className="lead">These are all the items on sale on the website.</p>
                        </div>
                    </div>

                    ) : (
                    <AddItemBtn
                    />
                    )}
               <CardGroup>
                    {props.items.map((item,index) => (
                        <ItemCard
                        // change this to match the data coming from mongodb
                            key={index}
                            id2={index}
                            id={item._id}
                            Name={item.Name}
                            Price={item.Price}
                            Image={item.Image}
                            Type={item.itemType}
                            Date={item.Date}
                            Quantity={item.Quantity}
                            Description={item.Description}
                            
                        />

                    ))}
                </CardGroup>

                       </div>
           
)


}

export default itemList;
