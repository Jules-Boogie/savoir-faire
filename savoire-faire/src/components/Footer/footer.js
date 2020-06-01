// choose country you want to shop in
//social media link to connect
// copyright

import React from 'react'
import Social from "./Social"

const style={

    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "2.5rem"
    

}

function footer() {
    return (
        <div className="container" style={style}> 

        <footer className="footer text-center navbar-expand-lg navbar-light navbar" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="row">
                
                <div className="col-md-2">
                    

                         <a href="#"> Contact Us </a> 
                         <a href="/products"> Home </a> 


                   
                    
                    

                </div>
                <div className="col-md-8"> <Social /></div>
                <div className="col-md-2">
                <p>Copyright &copy; 2020</p>
                </div>
            </div>


        </footer>
        </div>
    )


}
export default footer;