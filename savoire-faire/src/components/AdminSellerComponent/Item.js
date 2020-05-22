
import React from 'react';
import ItemCard from "./ItemCard"
import { CardGroup } from 'react-bootstrap';


function itemList(props){

    return (
        <div>
            {props.items.length ? (
                
                    <div className="jumbotron text-center jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4"> Items Listed for Sale</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>

                    ) : (
                    <button> Add an Item</button>
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

export default itemList;