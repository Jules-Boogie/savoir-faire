import React from 'react';

import Appuser from "../components/UsersInfoforAdmin/Users"
import Wrapper from "../Hoc/wrapper"
import wrapper from '../Hoc/wrapper';
function userPage (){

// grab userdata from server. 
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


export default userPage;