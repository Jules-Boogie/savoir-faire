import React from 'react';
import { Button } from 'react-bootstrap'
import AddItemModal from "./AddformComponent"



function addButton(){

    const [modalShow, setModalShow] = React.useState(false);

    

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Product
      </Button>

      <AddItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default addButton;