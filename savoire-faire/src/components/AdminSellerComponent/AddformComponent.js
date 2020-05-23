import React from 'react';
import { Modal } from 'react-bootstrap'
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <AddForm />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={props.handleSubmit}>
            Save Changes
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default addItemModal;