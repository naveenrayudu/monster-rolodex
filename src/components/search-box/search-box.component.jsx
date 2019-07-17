import React from "react";
import './search-box.style.css';

const SearchBox = (props) => {
  return (
    <div className="search-input--container">
    <input
      type="search"
      placeholder= {props.placeholder}
      className="search-input"
      value={props.value}
      onChange={props.onTextChange}
    />
  </div>
  )
};

export default SearchBox;