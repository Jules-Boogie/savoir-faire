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
        count: this.state.count + 1
    })

}

handleInputChange =(event)=>{
    this.setState({ comment: event.target.value });
}

handleCommentSubmit = () =>{
    // find the product by id and push to the comment array.
}




    
render(){ 

    return (

        <div>
          <ProductDetail
          
          name={this.state.product.Name}
          price={this.state.product.Price}
          color={this.state.product.Color}
          image1={this.state.product.Image[0]}
          image2={this.state.product.Image[1]}
          image3={this.state.product.Image[2]}
          description={this.state.product.Description}
          size={this.state.product.Size}
          comments={this.state.product.comments}
          instructions={this.state.product.Care}
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