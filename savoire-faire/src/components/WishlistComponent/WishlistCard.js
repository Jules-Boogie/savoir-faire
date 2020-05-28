import React from 'react';
import { Link } from 'react-router-dom';


function wishListCard(props) {

    return (
        <div>
            
            
                    <Link to={`/products/${props.key}`}>
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.Image} />
                            {/* it will be great if the image was slides of images */}
                            {/*check out pupster homework*/}
                            <div className="card-body">
                                <h5 className="card-title">{props.Name} </h5>
                                <p className="card-text">{props.Type} {props.Price}</p>
                                <a href={`/products/${props.key}`} className="btn btn-primary"> Details </a>
                                <button onClick={props.clicked} className="btn btn-danger"> Remove </button>
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

export default wishListCard;