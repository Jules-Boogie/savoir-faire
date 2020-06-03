import React from 'react';

function UsersList(props){
return (
    
    <div className="card col" style={{ width: '80rem' }}>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
            <div className="card mb-3" style={{ maxWidth: '900px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text" >{props.orderCount} {props.orderCount < 1 ? 'No orders' : 'Orders'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)

}

export default UsersList;