import React from 'react';

const PlayerCard = ({ name, country, searches }) => {
	return (
		<div className='Player__Card'>
			<div>
				<h2>Player</h2>
				<p>Name: {name}</p>
				<p>Country: {country}</p>
				<p>Searches: {searches}</p>
			</div>
		</div>
	);
};

export default PlayerCard;
