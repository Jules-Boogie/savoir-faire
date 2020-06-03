import React, { useState, useContext, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import API from "../Utils/API/Users/API_Users"
import AuthenticateContext from "../Utils/Context/authenticationContext"


function Profile() {
    const authenticate = useContext(AuthenticateContext)
    const [user, setUser] = useState({

    })

 const [userinfo, setUserInfo] = useState({
    firstname:"",
    lastname:"",
    email:"",
    intro:"",
    location:"",
    image:"",
    

    
})



 


  useEffect(() => {
      
    // if(authenticate.isLoggedIn){

    //     setUser(authenticate.userId)
    
    // }

    loadUserInfo(authenticate.userId)



  },[])
 


const loadUserInfo =(id)=>{
    API.getUser(id)
    .then(res => setUserInfo({
        firstname: res.data.firstName,
        lastname:res.data.lastName,
        email:res.data.email,
        intro:"BootCamp Student",
        location:"San Francisco",
        image:"https://cdn.shopify.com/s/files/1/0044/4740/4147/products/1-grafitti-black-lady-buble-gum-opt.jpg?v=1572135462",
        date:res.data.Date
    }))
}

const handleUserDelete = (id) => {
    API.deleteuser(id)
    
}




    
        return (
            <div className="row">
                <div className="col-sm-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={userinfo.image} />
                        <Card.Body>
                            <Card.Title> {userinfo.firstname} {userinfo.lastname} </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"> {userinfo.location} </Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">{userinfo.email}</Card.Subtitle>
                                
                                <Card.Text>
                                            {userinfo.intro}
                                        </Card.Text>
                                <Button variant="primary" onClick={()=> this.handleUserDelete(user)}> Delete Account </Button>
                               
                                        
                        </Card.Body>
                    </Card>

                </div>




            </div>




        )



    
}
export default Profile;