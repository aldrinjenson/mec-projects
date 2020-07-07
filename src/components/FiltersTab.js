import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters";

const FiltersTab = () => {
  return (
    <div className="filtersTab container">
      <SearchBar placeholder="Search by keywords" />
      <p>Add the following Filters to narrow down your searches:</p>
      <Filters /> 
    </div>
  );
};

export default FiltersTab;
