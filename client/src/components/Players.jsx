import React from 'react';
import Axios from 'axios';
import PlayersCard from './PlayersCard';

class Players extends React.Component {
	state = {
		players : []
	};

	componentDidMount() {
		Axios.get('http://localhost:5000/api/players').then((response) => {
			this.setState({
				players : response.data
			});
		});
	}

	render() {
		return (
			<div className='Players__Card' data-testid='players__'>
				{this.state.players.map((player) => (
					<PlayersCard
						key={player.id}
						name={player.name}
						country={player.country}
						searches={player.searches}
					/>
				))}
			</div>
		);
	}
}

export default Players;
