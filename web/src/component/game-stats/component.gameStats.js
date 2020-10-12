
import React from 'react'
import {Link} from "react-router-dom";

export default class GameStats extends React.Component {
	constructor(props) {
		super(props);

	}



	render() {
		return (
			<div className={`stats`}>
				<div className={'play-again'}>
					<Link to={'/'}>press here to play again to play</Link>
				</div>

				<div className={'table-container'}>
					<table className={'stats-table'}>
						<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Rank</th>
							<th>Points</th>
						</tr>
						</thead>

						<tbody>
						{
							Object.keys(this.props.game.players).map((playerId, index) => {
								return (
									<tr key={playerId}>
										<td>{index + 1}</td>
										<td>{this.props.game.players[playerId].name}</td>
										<td>{this.props.game.wonPlayer[playerId]}</td>
										<td>{this.props.game.players[playerId].points}</td>
									</tr>
								)
							})
						}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}