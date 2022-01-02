import React from "react";
import './Search.css';

const Search = ({ searchChange }) => {
    return (
        <div className="search_bar">
            <input
                className=''
                type='search'
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default Search;