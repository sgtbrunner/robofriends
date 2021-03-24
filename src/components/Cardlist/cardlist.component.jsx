import React from 'react';
import Card from '../Card/card.component';

const Cardlist = ({ robots }) => (
  <div>
    {robots.map((user) => {
      const { name, email, id } = user;
      return <Card name={name} email={email} id={id} key={id} />;
    })}
  </div>
);

export default Cardlist;
