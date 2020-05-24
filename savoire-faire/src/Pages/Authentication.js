import React from 'react'
import SignIn from "../components/SignUpsignInForm/signin"
import SignUp from "../components/SignUpsignInForm/signup"
import { Jumbotron } from "react-bootstrap"


function Authenticate(){

return (
    <div>
        <div className="row ">
            <div className="col-md-5"> 
            <SignIn/>
            </div>
            <div className="col">
                <Jumbotron> OR </Jumbotron>
            </div>
            <div className="col-md-5"> 
            <SignUp />
            </div>

        </div>
    </div>
)


}

export default Authenticate;