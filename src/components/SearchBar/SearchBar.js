import React from "react";
// import ReactSearchBox from "react-search-box";
import "./SearchBar.styles.css";

// const data = [
//   {
//     key: "john",
//     value: "John Doe",
//   },
//   {
//     key: "jane",
//     value: "Jane Doe",
//   },
//   {
//     key: "mary",
//     value: "Mary Phillips",
//   },
//   {
//     key: "robert",
//     value: "Robert",
//   },
//   {
//     key: "karius",
//     value: "Karius",
//   },
// ];


const SearchBar = ({placeholder}) => {
  return (
    <div className="searchbar">
      <div className="input-field searchfield">
        <input type="text" placeholder={placeholder} />
      </div>
      <span className="serchIcon">
        <i className="material-icons">search</i>
      </span>
    </div>
  );
};

export default SearchBar;
