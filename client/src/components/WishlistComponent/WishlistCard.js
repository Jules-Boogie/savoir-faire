import React from 'react';
import { Link } from 'react-router-dom';


function wishListCard(props) {

    return (
        <div>
            
            
                    
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.Image} />
                            {/* it will be great if the image was slides of images */}
                            {/*check out pupster homework*/}
                            <div className="card-body">
                            <Link to={`/users/products/${props.id}`}>
                                <h5 className="card-title">{props.Name} </h5>
                                <p className="card-text">{props.Type} {props.Price}</p>
                                <a href={`/users/products/${props.id}`} className="btn btn-primary"> Details </a>
                               
                                </Link>
                                <button onClick={props.clicked} className="btn btn-danger"> Remove </button>
                                {/* Love saves it to user's wishlist */}
                                {/* It will be nice if it was a heart icons */}
                                <div className="card-footer">
                                    <small className="text-muted">{`last updated on ${props.Date}`}</small>
                                </div>
                            </div>
                        </div>
                   
                




        </div >

    )

}

export default wishListCard;