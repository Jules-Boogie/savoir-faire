import React from 'react';
import ImageSlide from "./slidingImage"
import { InputGroup, FormControl, Form, Button } from "react-bootstrap"

const style={
    fontFamily: "'Chelsea Market', cursive"
}

function productDetail(props) {
    return <div style={style}>

        <div className="row">
            <div className="col">
                <ImageSlide {...props} />
            </div>
            <div className="col">
            <h3> {props.name} </h3>

        <h3 className="text-danger"> US$ {props.price}</h3>

        <h4> Color: {props.color} </h4>

        <button onClick={props.clickedfav} className="p-3 mb-2 bg-warning text-dark"> Favorite </button>
        <button onClick={props.clickedbuy} className="p-3 mb-2 bg-warning text-dark"> Buy Now </button>

        <h4> Description: </h4>
        <p>  {props.description} </p>
        <p> Size:</p>
        {props.Sizes.map((size,id) =>
        <input key={id} mycustomattribute={size} className="btn btn-primary" type="button" value={size}></input>
        )}

        <h4> Care and Instructions: </h4>
        <p> {props.instructions} </p>
        </div>
            
        </div>
        
            <div className="container">
        
            <h4> Likes: {props.likeCount} </h4>
                <h4 className="text-center"> Customer Testimonial </h4>
                {props.Comments.map((comment, id) => (

                    <p key={id}> Comment {id+1}: {comment} </p>

                ))}
                <Form>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text> Type your review </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={props.value} onChange={props.handleChange} as="textarea" aria-label="With textarea" />
                    <Button onClick={props.commentSubmit}> Submit </Button> 
                </InputGroup>
                </Form>

                </div>


    </div>


}

export default productDetail;