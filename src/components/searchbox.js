import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--gray bg-washed-yellow"
        type="search"
        placeholder="find your robot here..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
