import React from 'react'
import {Modal, Button} from 'react-bootstrap'

function alertDismissible(props) {
    
  
    return (
     
       <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
 
      
    );
  }
  
 export default alertDismissible;