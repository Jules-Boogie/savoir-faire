
import React from 'react';

function searchForm(props) {
    return (
        <div className="form-inline mx-auto float-right">
            <form className="form-inline">
                <input onChange={props.changed} className="form-control mr-sm-2" type="search" placeholder="Search" value={props.value} aria-label="Search" />
            </form>

        </div>

    )




}

export default searchForm;