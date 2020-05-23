import React from 'react';
import CardButton from "./CardBtn"
import ImageSlide from "./slidingImage"



function productDetail(props) {
    return <div>

        <div className="row">
            <div className="column">
                <ImageSlide/>
            </div>
            <div className="column">

            </div>
        </div>
        <h3> {props.name} </h3>

        <h3 className="text-danger">> {props.price}</h3>

        <h4> Color: {props.color} </h4>

        <button onClick={props.clicked} className="p-3 mb-2 bg-warning text-dark"> Add to Favorite </button>

        <h4> Description:
            {props.description}
        </h4>

        <h4> Care and Instructions:
            {props.instructions}
        </h4>

    </div>


}

export default productDetail;