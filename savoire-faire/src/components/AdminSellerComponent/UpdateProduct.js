import React from 'react';
import { Modal, Button } from 'react-bootstrap'


function updateProduct(props){
    

    
  
return (
    <div>
      <>
      <Modal show={props.showModal} onHide={props.handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onSubmit={props.handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    </div>
)





}
export default updateProduct;