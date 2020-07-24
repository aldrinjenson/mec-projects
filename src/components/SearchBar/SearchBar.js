import React from "react";
import "./SearchBar.styles.css";

const SearchBar = ({ placeholder, handleSearchQuery }) => {
  return (
    <div className="searchbar">
      <div className="input-field searchfield">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => handleSearchQuery(e.target.value)}
        />
      </div>
      <span className="serchIcon">
        <i style={{cursor: 'pointer'}} className="material-icons">search</i>
      </span>
    </div>
  );
};

export default SearchBar;
