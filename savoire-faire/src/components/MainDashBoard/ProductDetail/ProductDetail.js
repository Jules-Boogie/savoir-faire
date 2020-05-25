import React from 'react';
import CardButton from "./CardBtn"
import ImageSlide from "./slidingImage"
import { InputGroup, FormControl, Form, Button } from "react-bootstrap"



function productDetail(props) {
    return <div>

        <div className="row">
            <div className="column">
                <ImageSlide />
            </div>
            <div className="column">
            <h4> Likes: {props.likeCount} </h4>
                <h4> Comments </h4>
                {props.comments.map((comment, id) => (

                    <p>{id} {comment} </p>

                ))}
                <Form>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text> Add A Comment</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={props.value} onChange={props.handleChange} as="textarea" aria-label="With textarea" />
                    <Button onClick={props.commentSubmit}> Submit </Button> 
                </InputGroup>
                </Form>

            </div>
        </div>
        <h3> {props.name} </h3>

        <h3 className="text-danger">> {props.price}</h3>

        <h4> Color: {props.color} </h4>

        <button onClick={props.clickedfav} className="p-3 mb-2 bg-warning text-dark"> Favorite </button>
        <button onClick={props.clickedbuy} className="p-3 mb-2 bg-warning text-dark"> Buy </button>

        <h4> Description: </h4>
        <p>  {props.description} </p>
        <p> Size: {props.size}</p>


        <h4> Care and Instructions: </h4>
        <p> {props.instructions} </p>


    </div>


}

export default productDetail;