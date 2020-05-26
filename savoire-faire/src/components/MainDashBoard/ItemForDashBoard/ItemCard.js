import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationContext from "../../../Utils/Context/authenticationContext"
import React, { useContext } from 'react'
function itemCard(props) {

    const authenticate = useContext(AuthenticationContext)
    return (
        <div>
            
            
                    <Link to={`/products/${props.id}`}>
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.Image} />
                            {/* it will be great if the image was slides of images */}
                            {/*check out pupster homework*/}
                            <div className="card-body">
                                <h5 className="card-title">{props.Name} </h5>
                                <p className="card-text">{props.Type} {props.Price}</p>
                                {authenticate.loggedIn && (
                                <a href={`/products/${props.id}`} className="btn btn-primary"> Details </a>
                                )}
                                {/* <button className="btn btn-danger"> Love </button> */}
                                {/* Love saves it to user's wishlist */}
                                {/* It will be nice if it was a heart icons */}
                                <div className="card-footer">
                                    <small className="text-muted">{`last updated on ${props.Date}`}</small>
                                </div>
                            </div>
                        </div>
                    </Link>
                




        </div >

    )

}




export default itemCard;