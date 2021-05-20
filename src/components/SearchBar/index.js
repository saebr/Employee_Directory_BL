import React from "react";
import "./style.css";

function SearchBar(props){
    return (
        <div>
            <div className="form-outline m-5 ">
                <input type="search" id="form1" className="form-control" placeholder="Search"
                aria-label="Search" onChange={(e)=>{props.setSearch(e.target.value)}}/>
            </div>  
        </div>
    );
}

export default SearchBar;