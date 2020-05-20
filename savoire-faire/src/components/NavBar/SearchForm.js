
import React from 'react';

function searchForm(props) {
    return (
        <div className="form-inline mx-auto float-right">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" {...props} aria-label="Search" />
                <button onClick={props.clicked}className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

        </div>

    )




}

export default searchForm;