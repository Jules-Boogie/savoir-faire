import React from 'react';
import Listitem from "./usersList"
import { CardDeck } from 'react-bootstrap';

function appUsersList(props) {

    return (
        <div>

            <CardDeck>
                {props.users.map(user => (

                    <Listitem name={user.name}
                        id={user.id}
                        key={user.id}
                        image={user.image}
                        email={user.email}
                        orderCount={user.orders.length}
                    />
                ))}
            </CardDeck>








        </div>



    )

}

export default appUsersList;