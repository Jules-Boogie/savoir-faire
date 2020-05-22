import React from 'react';
import { Link } from 'react-router-dom';

function itemCard(props) {

    return (
        <div>
            
            
                    <Link to={`/update/products/${props.id}`}>
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.Image} />
                            {/* it will be great id the image was slides of images */}
                            <div className="card-body">
                                <h5 className="card-title">{props.Name} </h5>
                                <p className="card-text">{props.Type} {props.Price}</p>
                                <a href={`/update/products/${props.id}`} className="btn btn-primary"> Update </a>
                                <button className="btn btn-danger"> Delete </button>
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