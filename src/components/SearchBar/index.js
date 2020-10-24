import React from "react";
import "./style.css";


function SearchBar(props) {
    return (
        <form className="search">
          <div className="form-group">
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="term"
              type="text"
              className="form-control"
              placeholder="Type in a search term to begin"
              id="term"
            />
            
          </div>
        </form>
      );
}

export default SearchBar;
