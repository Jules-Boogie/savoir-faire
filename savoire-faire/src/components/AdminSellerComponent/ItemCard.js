import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateProduct from "../AdminSellerComponent/UpdateProduct"
import DeleteModal from "../AdminSellerComponent/DeleteModal"

function ItemCard(props) {
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const handleModalClose = () => setShowModal(false);

    const handleModalShow = () => setShowModal(true);
    const handleFormSubmit = () => {
        // put request to server. 
    }

    const showDeleteModalhandler = () => setShowDeleteModal(true);
    const cancelDeleteActionhandler = () => setShowDeleteModal(false);

    const confirmDeleteHandler = () => {
        // send delete request to server
        setShowDeleteModal(false)

    }

    return (
        <div>


            
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={props.Image} />
                    {/* it will be great id the image was slides of images */}
                    <div className="card-body">
                        <h5 className="card-title">{props.Name} </h5>
                        <p className="card-text">{props.Type} {props.Price} {props.Quantity}</p>
                        <>
                        <a onClick={handleModalShow}  className="btn btn-primary"> Update </a>
                        <UpdateProduct
                            showModal={showModal}
                            handleModalClose={handleModalClose}
                            handleFormSubmit={handleFormSubmit}
                        />
                        </>
                        <>
                            <button onClick={showDeleteModalhandler} className="btn btn-danger"> Delete </button>
                            <DeleteModal
                                Cancel={cancelDeleteActionhandler}
                                Delete={confirmDeleteHandler}
                                handleModalClose={cancelDeleteActionhandler}
                                showModal={showDeleteModal}
                            />
                        </>
                        <div className="card-footer">
                            <small className="text-muted">{`last updated on ${props.Date}`}</small>
                        </div>
                    </div>
                </div>
            






        </div >

    )

}




export default ItemCard;