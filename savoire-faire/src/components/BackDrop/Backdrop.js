import React from 'react'
const style={
    position:"fixed",
    height:"100%",
    background:"rgba(0,0,0,0.3)",
    zIndex:100

}



function BackDrop(props){
    return (
<div style={style} onClick={props.click}></div>


    )
}

export default BackDrop;