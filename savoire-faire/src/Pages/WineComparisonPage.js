import React, { Component } from 'react'
import { Jumbotron } from "react-bootstrap"

import API from "../Utils/External/API_external"
import SearchForm from "../components/Lifestyle/WineComparison/Search"
import Table from "../components/Lifestyle/WineComparison/Table"


class WineComparisonPage extends Component {



    // declare state
    state = {
        recommendedWine: [],
        search: ""
    }

    componentDidMount() {
        this.getWine("malbec");

    }

    getWine = query => {
        API.wineComparison(query)
            .then(res => {

                
                this.setState({
                    recommendedWine: res.data.recommendedWines.map(wine => ({
                       image:wine.imageUrl,
                       name:wine.title,
                       description:wine.description,
                       buy:wine.link,
                       price:wine.price,
                       rating:wine.ratingCount
                    }))
                })
            })
            .catch(error => console.log(error))

            
    }


    handleInputChange = (event) => {

        const value = event.target.value;

        this.setState({
            search: value
        })


    }
    handleSubmitBtn = () => {
       this.getWine(this.state.search)
    }

  
    
    filterField = (section) => {
        switch(section){
        case"price":
        const winePrice = [...this.state.recommendedWine]
        winePrice.sort((first, second) => (first.price > second.price ? 1: -1))
        this.setState({
            recommendedWine:winePrice
        })
        break;

        case"rating":
        const wineRating = [...this.state.recommendedWine]
        wineRating.sort((first, second) => (first.rating > second.rating ? 1: -1))
        this.setState({
            recommendedWine:wineRating
        })
        break;
        default:
            const wineDefault = [...this.state.recommendedWine]
            this.setState({
                recommendedWine:wineDefault
            })
        }
    }



    // searchValue = (search) =>{
    //    var searchResult = this.state.employee.filter(person => person.firstName === search
    //     )
    //     this.setState({
    //         employee: searchResult
    //     })
    // }

    render() {

        return (
        <div>
               <h1 className="display-4 text-center"> Wine Recommendation </h1>
                < SearchForm
                    Value={this.state.search}
                    Change={this.handleInputChange}
                    Test={this.state.search}
                    clicked={this.handleSubmitBtn}
                />

                
                <table className="table table-hover table-dark" >
                    <thead>
                        <tr>
                        <th scope="col">Image </th>
                    <th scope="col">Wine Name</th>
                    <th scope="col">Description</th>
                    <th scope="col"> Buy </th>
                    <th scope="col"
                     className="btn"
                     onClick={()=>this.filterField("price")}> Cost </th>
                    <th scope="col"
                    className="btn"
                    onClick={()=>this.filterField("rating")}> Rating </th>
                        </tr>
                    </thead>
                    {this.state.recommendedWine.map((wineInfo, id) => {
                        return (
                            <Table key={id}
                                image={wineInfo.image}
                                name={wineInfo.name}
                                description={wineInfo.description}
                                buy={wineInfo.buy}
                                price={wineInfo.price}
                                rating={wineInfo.rating}
                            >
                            </Table>
                        )

                    })}
                </table>





            

                </div>

        )


    }

}

export default WineComparisonPage;