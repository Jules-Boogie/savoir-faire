import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateProduct from "../AdminSellerComponent/UpdateProduct"
import DeleteModal from "../AdminSellerComponent/DeleteModal"
import API from "../../Utils/API/Products/API_product"

function ItemCard(props) {
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [productState, setProductState] = useState({
        id:"",
        price: 0,
        name: "",
        Quantity: 0,
        Description: ""
    })

    const handleModalClose = () => setShowModal(false);

    const handleModalShow = () => setShowModal(true);


// const onClick = (event) => {
//     handleModalShow();
//     func2();
// }
const loadProduct = id => {

    API.getProduct(id)
        .then(res => setProductState({
            id:res.data._id,
            price: res.data.Price,
            name: res.data.Name,
            Quantity: res.data.Quantity,
            Description: res.data.Description
        }));
    
        
    };

const handleInputChange = event => {

    const [name, value] = event.target
    setProductState({
        [name] : value
    })
    
}
const handleFormSubmit = (event, id) => {
    //find item by id and show/update the state of the item
    // send put request to server with the new added value
    event.preventDefault();
    API.updateProduct(id, {
        Name:productState.name,
        Description:productState.Description,
        Price: productState.price,
        Quantity:productState.Quantity  
    })
}

const showDeleteModalhandler = () => setShowDeleteModal(true);
const cancelDeleteActionhandler = () => setShowDeleteModal(false);



const confirmDeleteHandler = (id) => {
    // send delete request to server
    API.deleteProduct(id)
        .then(res => this.renderproducts())
        .catch(err => console.log(err))
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
                    <a onClick={()=> {loadProduct(props.key); handleModalShow()}} className="btn btn-primary"> Update </a>
                    <UpdateProduct
                        showModal={showModal}
                        handleModalClose={handleModalClose}
                        handleFormSubmit={()=>handleFormSubmit(props.key)}
                        price={productState.price}
                        name={productState.name}
                        description={productState.Description}
                        quantity={productState.Quantity}
                        Changed={handleInputChange}

                    />
                </>
                <>
                    <button onClick={showDeleteModalhandler} className="btn btn-danger"> Delete </button>
                    <DeleteModal
                        Cancel={cancelDeleteActionhandler}
                        Delete={()=>confirmDeleteHandler(props.key)}
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