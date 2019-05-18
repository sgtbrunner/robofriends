import React from 'react';
import Card from './card';

const Cardlist = ({robots}) => {
	return (
		<div>
			{
			    robots.map((user) => {
					return (
						<Card 
						name={user.name} 
						email={user.email} 
						key={user.id}
						/>
					);
				})
			}
	    </div>
	);
}

export default Cardlist;