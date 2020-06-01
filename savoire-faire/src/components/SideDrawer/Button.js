import React from 'react'
import {Button} from 'react-bootstrap'
import Css from "../NavBar/nav.css"


const stylebutton={
    display:"flex",
    flexDirection: "column",
    justifyContent:"space-between",
    height:"90px",
    width:"30px",
    background: "transparent",
    border:"none",
    cursor:"pointer",
    padding:0,
    boxSizing:"border-box"
}

const style={
    width:"30px",
    height:"1px",
    background:"red",

}

function DrawerButton (props){

    return (
    <Button className={Css.sidedrawer} style={stylebutton} onClick={props.click}>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        
    </Button>
    )
}
export default DrawerButton;

