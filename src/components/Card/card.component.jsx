import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, email, id }) => (
  <div className="dib br3 pa1 ma2 grow bw2 shadow-5 bg-light-green">
    <img alt="robot" src={`https://robohash.org/${name + email + id}`} />
    <h2>{name}</h2>
    <p>{email.toLowerCase()}</p>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
