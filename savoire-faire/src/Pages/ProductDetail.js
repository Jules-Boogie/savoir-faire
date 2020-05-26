import React, { Component } from 'react';
import API from "../Utils/API/Products/API_product"
import ProductDetail from "../components/MainDashBoard/ProductDetail/ProductDetail"
// import { useParams } from "react-router-dom";


class ProductDetailPage extends Component {

    state = {
        product:{},
        comment:"",
        count:0,
        comment:[""]
    }

    componentDidMount(){
        API.getProduct(this.props.match.params.id)
        .then(res => this.setState({ product: res.data }))
      .catch(err => console.log(err));
  }
 
handleFavoriteBtn = () =>{
    this.setState({
        count: count + 1
    })

}

handleInputChange =(event)=>{
    setState({ comment: event.target.value });
}

handleCommentSubmit = () =>{
    // find the product by id and push to the comment array.
}




    
render(){ 

    return (

        <div>
          <ProductDetail
          
          name={product.Name}
          price={product.Price}
          color={product.Color}
          image1={product.Image[0]}
          image2={product.Image[1]}
          image3={product.Image[2]}
          description={product.Description}
          size={product.Size}
          comments={product.comments}
          instructions={product.Care}
          handleChange={this.handleInputChange}
          clickedFav={this.handleFavoriteBtn}
          value={this.state.comment}
          commentSubmit={this.handleCommentSubmit}
          likeCount={this.state.count}

          />
        </div>
    )
    


}







}
export default ProductDetailPage;