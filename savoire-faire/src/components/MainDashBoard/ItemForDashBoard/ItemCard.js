
import { Link } from 'react-router-dom';
import AuthenticationContext from "../../../Utils/Context/authenticationContext"
import React, { useContext } from 'react'

const style={
    fontFamily: "'Chelsea Market', cursive"
}
function ItemCard(props) {

    const authenticate = useContext(AuthenticationContext)
    return (
        <div>


            
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={props.Image} />

                    <div style={style} className="card-body">
                    <Link to={`/users/products/${props.id}`}>
                        <h5 className="card-title">{props.Name} </h5>
                        <p className="card-text">{props.Type}</p>
                        <p className="card-text"> US$ {props.Price}</p>
                        <p className="card-text"> 
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        Likes {props.Fan}</p>
                        {authenticate.isLoggedIn && (
                        <a href={`/products/${props.id}`} className="btn btn-primary"> Details </a>
                        )}
                        </Link>
                    {/* {authenticate.isLoggedIn && (
                        <button className="btn btn-danger" onClick={props.love}> Love </button>
                    )} */}

                    <div className="card-footer">
                        <small className="text-muted">{`last updated on ${props.Date}`}</small>
                    </div>
                </div>
                        </div>






        </div >

    )

}




export default ItemCard;