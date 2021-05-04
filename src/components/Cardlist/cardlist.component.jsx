import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

const Cardlist = ({ robots }) => (
  <div>
    {robots.map((user) => {
      const { name, email, id } = user;
      return <Card name={name} email={email} id={id} key={id} />;
    })}
  </div>
);

Cardlist.propTypes = {
  robots: PropTypes.array.isRequired,
};

export default Cardlist;
