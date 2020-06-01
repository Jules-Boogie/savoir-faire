import React, { Component } from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import API from "../Utils/API/Users/API_Users"

const stripePromise = loadStripe("pk_test_iK19GKRzDqf6jC9VV4zc0Yz700sdbIE3Ys");

class CheckoutPage extends Component{
    

    state={
        products:[],
        total:0
    }
    

    loadCartitems =(id)=>{
        API.populateUserCart(id)
        .then(res=> this.setState({products:res.data.items}))
        .catch(err => console.log(err));
     }


     componentDidMount(){
         this.loadCartitems(this.props.match.params.id)
         this.generateTotalPrice()
     }

     generateTotalPrice(){
         let total = 0;
         const productA = [...this.state.products]

         productA.forEach(element =>{
              total += element.quantity * element.itemId.Price
                this.setState({total:total})
            })
     }

    
    render(){
return (
    <div> 
        <h1>Checkout Page </h1> 
        <h4> Total Sum : {this.state.total} </h4>
        <div>

        </div>
        {this.state.products.map(element => {
            return(
             <ul>
             <li> {element.itemId.name}</li>
             <li>{element.quantity}</li>
         </ul>)

        })}
       
      





    </div>
)
    }
}

export default CheckoutPage;