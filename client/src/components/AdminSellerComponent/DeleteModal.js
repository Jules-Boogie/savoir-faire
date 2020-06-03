import React from 'react'
import { Modal, Button } from 'react-bootstrap'


function deleteModal(props){

  return (
<div>
<>
<Modal show={props.showModal} onHide={props.handleModalClose}>
<Modal.Dialog >
  <Modal.Header closeButton>
    <Modal.Title> Are you sure? </Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p> Careful! Are you sure you want to delete this item? Please note that buyers might have it in their favorite list.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={props.Cancel} variant="secondary"> CANCEL</Button>
    <Button onClick={props.Delete}variant="danger"> Yes, please! </Button>
  </Modal.Footer>
</Modal.Dialog>
</Modal>
</>
</div>
  )

}

export default deleteModal;
