import React from "react";
import "./style.css";

function SearchBar(props){
    return (
        <div>
            <div class="form-outline m-5 ">
                <input type="search" id="form1" class="form-control" placeholder="Search"
                aria-label="Search" />
            </div>  
        </div>
    );
}

export default SearchBar;