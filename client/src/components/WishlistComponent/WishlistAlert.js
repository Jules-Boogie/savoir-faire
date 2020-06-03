import React from "react";


function alertfavorite() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>You've got good taste!</Alert.Heading>
          <p>
           This item has been aded to your favorites. 
           Click <Alert.Link href="#"> Favorites List</Alert.Link> to see all items on 
           your wishlist. 
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }
  
  export default alertfavorite;