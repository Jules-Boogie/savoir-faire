
import React, { Component } from "react"
import SearchForm from "../components/Lifestyle/Wine/SearchForm"
import API from "../Utils/External/API_external"
import WineRender from "../components/Lifestyle/Wine/WineRender"




class WinePage extends Component{

    state = {
        search:"salmon",
        pairedWine:[],
        pairingText:"",
        productMatches:[]

    }

    componentDidMount(){
        this.findWine("")
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     return this.state.search != nextState.search;
    // }

    findWine = query => {
        API.searchWine(query)
        .then(res => this.setState({
            pairedWine: res.data.pairedWines,
            pairingText:res.data.pairingText,
            productMatches:res.data.productMatches
        }))
    }

    handleSearchClick = ev => {
        ev.preventDefault();
        this.findWine(this.state.search)
    }

    handleInputChange = event => {
       
        const value = event.target.value
        
        this.setState({
            search: value
        })
    }

    render(){
        return (
        <div className="container">
            
<SearchForm
change={this.handleInputChange}
searchValue={this.state.search}
clicked={this.handleSearchClick}
/>

        <h4> Wine Ideas for {this.state.search}</h4>
<WineRender
productMatches={this.state.productMatches}
pairedWines={this.state.pairedWine}
pairingText={this.state.pairingText}
searchValue= {this.state.search}
/>
</div>
        )
    }



}

export default WinePage;