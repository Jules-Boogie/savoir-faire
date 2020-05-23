import React from 'react';
import { Modal, Button } from 'react-bootstrap'


function updateProduct(props) {


//  should only be able to update price really

  return (
    <div>
      <>
        <Modal show={props.showModal} onHide={props.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Modal.Body>
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