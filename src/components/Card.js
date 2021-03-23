import React from 'react';

const Card = ({ name, email }) => {
 	return (
   <div className="dib br3 pa1 ma2 grow bw2 shadow-5 bg-light-green">
     <img alt="robot" src={`https://robohash.org/${name}`} />
     <h2>{name}</h2>
     <p>{email}</p>
   </div>
 	);
};

export default Card;
