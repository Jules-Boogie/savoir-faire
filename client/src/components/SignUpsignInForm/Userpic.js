import React from 'react';
import {Form, Button} from 'react-bootstrap'

function userPic(){
    const [selectedfile, setSelectedfile] = useState(null)

    const handlePicUpload = (event) => {

        event.preventDefault()
        const file = event.target.files[0]

    }

    const handleUploadbtn = () =>{
    const picData = new FormData()
    picData.append('picfile', selectedfile)
    }



    return(
        <div>

             <Form.Group>
            <Form.File accept=".jpg, jpeg, .png, " id="exampleFormControlFile1"type="file" name="file" onChange={handlePicUpload} label="Enter photo" />
            <Button variant="info" onClick={handleUploadbtn}> Upload Pic</Button> 
          </Form.Group>
        </div>
    )
}