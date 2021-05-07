import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ searchChange }) => (
  <div>
    <input
      className="pa3 ba b--gray bg-washed-yellow"
      type="search"
      placeholder="find your robot here..."
      onChange={searchChange}
    />
  </div>
);

SearchBox.propTypes = {
  searchChange: PropTypes.func,
};

SearchBox.defaultProps = {
  searchChange: () => null,
};

export default SearchBox;
