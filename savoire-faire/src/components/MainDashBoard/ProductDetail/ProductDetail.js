import React from 'react';
import CardButton from "./CardBtn"



function productDetail(props) {
    return <div>

        <div className="row">
            <div className="column">

                <div
                    className="card"
                    style={{
                        backgroundImage: props.image ? `url(${props.image})` : "none"
                    }}
                >
                    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                    <CardButton
                        style={{ opacity: props.image ? 1 : 0 }}
                        onClick={props.handleBtnClick}
                        data-value="prev"
                    />
                    <CardButton
                        style={{ opacity: props.image ? 1 : 0 }}
                        onClick={props.handleBtnClick}
                        data-value="next"
                    />
                </div>
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