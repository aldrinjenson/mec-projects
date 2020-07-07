import React from "react";

const Filters = () => {
  return (
    <div
      className="filters"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <button className="btn btn-flat">FIlter 1</button>
      <button className="btn btn-flat">FIlter 2</button>
      <button className="btn btn-flat">FIlter 3</button>
    </div>
  );
};

export default Filters;
