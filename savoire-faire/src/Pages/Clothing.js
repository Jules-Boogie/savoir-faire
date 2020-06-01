import React, { useState, useEffect, Component } from 'react';

import ItemList from '../components/MainDashBoard/ItemForDashBoard/ItemList'
import SortPage from "../components/MainDashBoard/FilterPane/sortDropDown"
import API from "../Utils/API/Products/API_product"


function ClothingPage() {

    const [item, setItem] = useState([])
    const [value, setValue] = useState("select")

    // define states 

    // define methods 
    useEffect(() => {
        loadClothing()

    }, [])


    const loadClothing = () => {
        API.getClothing()
            .then(res => (setItem(res.data),
                console.log(res.data)))
    }

    const handleChange = (event) => {
        setValue(event.target.value)
        if (value === "lowest") {
            console.log("filter")
            const itemHighest = [...item]
            itemHighest.sort((first, second) => ( second.Price - first.Price ))
            setItem(itemHighest)
        } else if (value === "highest") {
            console.log("filter")
            const itemlowest = [...item]
            itemlowest.sort((first, second) => (first.Price - second.Price))
            setItem(itemlowest)

        } else if (value === "newest") {
            console.log("filter")
            const itemnewest = [...item]
            itemnewest.sort((first, second) => (first.Date - second.Date))
            setItem(itemnewest)
        } else if (value === "loved") {
            console.log("filter")
            const itemloved = [...item]
            itemloved.sort((first, second) => (second.Fans.length - first.Fans.length))
            setItem(itemloved)
        } else {
            const itemDefault = [...item]
            setItem(itemDefault)

        }
    }






    // const filterField = (section) => {
    //     switch (section) {
    //         case "highest":
    //             console.log("filter")
    //             const itemHighest = [...item]
    //             itemHighest.sort((first, second) => (first.Price > second.Price ? 1 : -1))
    //             setItem(itemHighest)
    //             break;

    //         case "lowest":
    //             console.log("filter")
    //             const itemlowest = [...item]
    //             itemlowest.sort((first, second) => (first.Price < second.Price ? 1 : -1))
    //             setItem(itemlowest)
    //             break;
    //         default:
    //             const itemDefault = [...item]
    //         setItem(itemDefault)
    //     }
    // }

    // if(value = "highest"){
    //     console.log("filter")
    //             const itemHighest = [...item]
    //             itemHighest.sort((first, second) => (first.Price > second.Price ? 1 : -1))
    //             setItem(itemHighest)
    // }

    // else if(value="lowest"){
    //     console.log("filter")
    //             const itemlowest = [...item]
    //             itemlowest.sort((first, second) => (first.Price < second.Price ? 1 : -1))
    //             setItem(itemlowest)
    // } else{
    //     const itemDefault = [...item]
    //         setItem(itemDefault)

    // }


    // const handlelowest=() => {
    //     console.log("test")
    //     const itemlowest = [...item]
    //                 itemlowest.sort((first, second) => (first.Price - second.Price))
    //                 setItem(itemlowest)
    // }

    // const handlehighest =() =>{
    //     const itemHighest = [...item]
    //     itemHighest.sort((first, second) => ( second.Price - first.Price))
    //     setItem(itemHighest)
    // }



    return (



        <div>
            <SortPage
                change={handleChange}
            // lowest={handlelowest}
            // highest={handlehighest}
            />
            <ItemList title="Clothing" items={item} />


        </div>

    )





}



export default ClothingPage;