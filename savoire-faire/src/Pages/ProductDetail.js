import React, { useState, useContext, useEffect} from 'react';
import API from "../Utils/API/Products/API_product"
import APIu from "../Utils/API/Users/API_Users"
import ProductDetail from "../components/MainDashBoard/ProductDetail/ProductDetail"
import { useParams } from 'react-router-dom';
import AuthenticateContext from "../Utils/Context/authenticationContext"
import Alert from "../components/MainDashBoard/ProductDetail/Alert"
// import { useParams } from "react-router-dom";


function ProductDetailPage(){

    const authenticate = useContext(AuthenticateContext)
    // const [userId, setUserId] = useState({

    // })
const [show, setShow] = useState(false);
   

const [comment, setComment] = useState('')
const [ cartObject, setCartobject] = useState({
    itemId:"",
    quantity:0,
    price:0,
})

    const [productState, setProductState] = useState({
        product: {},
        images: [""],
        size:[""],
        count: 0,
        comments: [""],
        productid: "",
        Fans:0,
    })

    const { id } = useParams()

    useEffect(() => {

        // if(authenticate.isLoggedIn){

        //     setUser(authenticate.userId)
        
        // }

    
        API.getProduct(id)
            .then(res =>  (setProductState({
                product: res.data,
                comments: res.data.Comments,
                images: res.data.Image,
                size:res.data.Size,
                productid: res.data._id,
                Fans:res.data.Fans.length
            }), 
            setCartobject({itemId: productState.productid,
                quantity: productState.cartitemPrice,
                price: productState.product.price})
        ))
            .catch(err => console.log(err));
    })


    const handleFavoriteBtn = (userid) => {
        console.log("add favorite button works")
        APIu.addtoFavorite(userid, {id})
        API.saveProductFans(id,{userid})
        setShow(true)

    }

    const handleInputChange = (event) => {
      
        console.log(event.target.value)
        setComment(event.target.value);
    }

   const  handleCommentSubmit = (id) => {
        
        // find the product by id and push to the comment array.
        API.saveProductComment(id,{_id:comment},{
            $push: {Comments:comment}
        })
    }

    const handleBuyBtn = (userid) => {
        console.log("add to cart button has been clicked")
        // setCartobject({itemId: productState.productid,
        //         quantity: productState.cartitemPrice,
        //         price: productState.product.price})
        // let itemCart = {
        //     itemId: productState.productid,
        //     quantity: productState.cartitemPrice,
        //     price: productState.product.price}
        APIu.addtoCart(userid, {cartObject}    
        )
    }





    

        return (

            <div>
                <AuthenticateContext.Consumer>
                    {(context) =>
                <ProductDetail key={productState.productid}
                    show={show}
                    onHide={()=> setShow(false)}
                    name={productState.product.Name}
                    price={productState.product.Price}
                    color={productState.product.Color}
                    Image={productState.images}
                    description={productState.product.Description}
                    Sizes={productState.size}
                    Comments={productState.comments}
                    instructions={productState.product.Care}
                    handleChange={handleInputChange}
                    clickedfav={()=>handleFavoriteBtn(authenticate.userId)}
                    value={productState.comment}
                    commentSubmit={()=>handleCommentSubmit(productState.productid)}
                    likeCount={productState.Fans}
                    clickedbuy={()=>handleBuyBtn(authenticate.userId)}
                    

                />}
                </AuthenticateContext.Consumer>
            </div>
        )



    
        






}
export default ProductDetailPage;