// card should have picture of item
// card should have size of item
//card should have brand

// a button to like
// a button to comment and also see other comments.

import React from "react"

const CardSearchBook = (props) => {


    // const handleSave = e => {
    //     API_server.saveBook({
    //         title: props.title, 
    //         author: props.author,
    //         image: props.image,
    //         body: props.body,
    //         link: props.link
    //     })
    // }

    return (
        <div className="container text-dark text-center row mr-0px">
            <div className="card col" style={{ width: '80rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.itemName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.Owner}</h6>
                    <div className="card mb-3" style={{ maxWidth: '900px' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={props.image} className="card-img" alt="..." />
                            </div>
                            {/* <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text" >{props.body}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                <a className="btn btn-info pr-3" href={props.link} target="_blank" rel='noreferrer noopener'>
                        More Info
                        {/* it will be good if this opens up a modal with more info about the product. As the card should only hold the cost, image, and name of the product */}
                        {/* On this modal, we will have the option to buy or save the item to favorites */}
                 </a>
                    <button className="btn btn-success" onClick={props.love}>
                        like 
                        {/* a heart icon will be good */}
                 </button>
                </div>
            </div>
        </div>
    )

}

