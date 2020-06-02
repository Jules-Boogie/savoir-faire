import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import AddForm from "./AddForm"


function addItemModal(props) {
    return (
      <Modal
        {...props}
        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add An Item
          </Modal.Title>
        </Modal.Header>
        <Form>
        <Modal.Body>
         <AddForm  />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" {...props.onClick}>
            Save Changes 
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Form>
      </Modal>
    );
  }

  export default addItemModal;