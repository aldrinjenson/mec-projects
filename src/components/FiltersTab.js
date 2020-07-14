import React, { useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";

const FiltersTab = ({ constraints, setConstraints }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConstraints({ ...constraints, [name]: value });
  };

  const handleSearchQuery = (query) => {
    setConstraints({ ...constraints, searchQuery: query });
  };

  return (
    <div className="filtersTab container">
      <div className="search">
        <SearchBar
          placeholder="Search by keywords"
          handleSearchQuery={handleSearchQuery}
        />
      </div>
      <p>Add the following Filters to narrow down your search:</p>
      <br/>
      <div className="filters">
        <div className="row">
          <div className="input-field col s4">
            <select name="completedYear" onChange={handleChange}>
              <option value="" defaultValue>
                All Years
              </option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
            <label>Year of completion</label>
          </div>
          <div className="input-field col s4">
            <select name="className" onChange={handleChange}>
              <option value="" defaultValue>
                All
              </option>
              <option value="CSA">CSA</option>
              <option value="CSB">CSB</option>
              <option value="ECA">ECA</option>
              <option value="ECB">ECB</option>
              <option value="EBE">EBE</option>
              <option value="EEE">EEE</option>
            </select>
            <label>Class</label>
          </div>
          <div className="col s4">
            <p>
              <label>
                <input
                  type="checkbox"
                  name="onlyFinalYear"
                  checked={constraints.isFinalYear}
                  onChange={(e) =>
                    setConstraints({
                      ...constraints,
                      onlyFinalYear: e.target.checked,
                    })
                  }
                />
                <span>Show only Final year projects</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersTab;
