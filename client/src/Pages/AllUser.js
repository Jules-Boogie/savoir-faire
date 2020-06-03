import React, { useState, useEffect } from 'react';

import Appuser from "../components/UsersInfoforAdmin/Users"
import Wrapper from "../Hoc/wrapper"
import wrapper from '../Hoc/wrapper';
import API from "../Utils/API/Users/API_Users"
function UserPage (){

    // const [userSeed, setUserSeed] = useState([])

    // const loadUsers=()=>{
    //     API.getUsers()
    //     .then(res => setUserSeed(res.data))
    // }

    // useEffect(() => {
    //     loadUsers()
    // },[])



const userSeed = [
    {
    name: "Juliet George", 
    id: "u1",
    image: "https://picsum.photos/536/354",
    email:"juliet@dronedeploy.com",
    orders: ["rice", "beans", "Gray"]
    },
    {
        name: "Reigner George", 
        id: "u2",
        image: "https://picsum.photos/536/354",
        email:"juliet@dronedeploy.com",
        orders: ["rice", "beans", "Gray", "Yam"]
        },
        {
            name: "Justina George", 
            id: "u3",
            image: "https://picsum.photos/536/354",
            email:"juliet@dronedeploy.com",
            orders: ["rice", "beans", "Gray", "Yam"]
            }
]

return (

    <Wrapper>
    <Appuser users={userSeed}/>
    </Wrapper>
)

}


export default UserPage;