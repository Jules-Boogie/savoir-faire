import React from 'react';
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap'


function updateProduct(props) {


  //  should only be able to update price really

  return (
    <div>
      <>
        <Modal  show={props.showModal} onHide={props.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title> Update {props.name}</Modal.Title>
          </Modal.Header>
          <Form >
            <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>$ </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={props.Changed} placeholder={props.price} aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  onChange={props.Changed} 
                  placeholder={props.description}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />

              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text> Description</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" onChange={props.Changed} placeholder={props.description} aria-label="With textarea" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Quantity</InputGroup.Text>
                </InputGroup.Prepend>
                
                <FormControl onChange={props.Changed} placeholder={props.quantity} aria-label="Amount (to the nearest dollar)" />
               
              </InputGroup>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleModalClose}>
                Cancel
          </Button>
              <Button variant="primary" onClick={props.handleFormSubmit}>
                Save Changes
          </Button>
            </Modal.Footer>
          </Form>

        </Modal>
      </>

    </div>
  )





}
export default updateProduct;