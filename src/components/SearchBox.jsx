import React from "react";

const SearchBox = ({ onChange }) => (
  <div className="pa2">
    <input
      aria-label="Search robots"
      className="pa3 ba b--green bg-lightest-blue"
      onChange={onChange}
      type="search"
      placeholder="Search Robots"
    />
  </div>
);

export default SearchBox;
