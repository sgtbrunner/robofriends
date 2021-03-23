import React from 'react';

const Scroll = (props) => {
  return (
    <div className="scrollbox">
      {props.children}
    </div>
  );
};

export default Scroll;
