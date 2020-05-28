import React, {useState} from 'react';
import { Button } from 'react-bootstrap'
import AddItemModal from "./AddformComponent"
import API from '../../Utils/API/Products/API_product';



function AddButton(){

    const [modalShow, setModalShow] = React.useState(false);
    const [productState, setProductState] = useState({
      name:"",
      imageUrl:[""],
      color:"",
      quantity:0,
      type:"",
      description:"",
      care:"",
      price:0,
      size:[0]
    })
    

    const handleInputChange = event => {

      const [name, value] = event.target
      setProductState({
          [name] : value
      })
      
  }
   const handleSubmitBtn = event => {
     event.preventDefault()
     API.saveProduct({
      Size:productState.size,
      Price:productState.price,
      Description:productState.description,
      Care:productState.care,
      Type:productState.type,
      Quantity:productState.quantity,
      Color:productState.color,
      Image:productState.imageUrl,
      Name:productState.name
     })
     
   }


  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Product
      </Button>

      <AddItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size={productState.size}
        price={productState.price}
        description={productState.description}
        care={productState.care}
        type={productState.type}
        quantity={productState.quantity}
        color={productState.color}
        imageUrl={productState.imageUrl}
        name={productState.name}
        Changed={handleInputChange}
        handleSubmit={handleSubmitBtn}
      />
    </>
  );
}

export default AddButton;