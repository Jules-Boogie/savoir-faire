import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import AddItemModal from "./AddformComponent"
import API from '../../Utils/API/Products/API_product';



function AddButton() {

  const [modalShow, setModalShow] = React.useState(false);
  const [productState, setProductState] = useState({
    name: "",
    imageUrl: [""],
    color: "",
    quantity: 0,
    type: "",
    description: "",
    care: "",
    price: 0,
    size: ["4", "6", "7", "8"]
  })


  const handleInputChange = event => {

    const { name, value } = event.target
    setProductState({
      ...productState,
      [name]: value
    });
    console.log(productState)
  }
  const handleSubmitBtn = event => {


    event.preventDefault()
    API.saveProduct({
      Size: (productState.size),
      Price: parseInt(productState.price),
      Description: productState.description,
      Care: productState.care,
      itemType: productState.type,
      Quantity: parseInt(productState.quantity),
      Color: productState.color,
      Image: productState.imageUrl,
      Name: productState.name,
      Date: new Date()
    })


  }



  //  "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53071046_28.jpg?ts=1562301209637&imwidth=100&imdensity=1,https://st.mngbcn.com/rcs/pics/static/T5/fotos/outfit/S20/53071046_28-99999999_01.jpg?ts=1562301209637&imwidth=100&imdensity=1, https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53071046_28_D3.jpg?ts=1562301209637&imwidth=100&imdensity=1"
  // "130,235,342,124"
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
        // quantity={productState.quantity}
        // color={productState.color}
        imageUrl={productState.imageUrl}
        name={productState.name}
        onChange={handleInputChange}
        onClick={handleSubmitBtn}
      />
    </>
  );
}

export default AddButton;