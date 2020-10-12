import React, {Component} from 'react'

import './component.game-summary.less'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";


export default class GameSummary extends Component {
	constructor(props) {
		super(props);

		console.log('summary ranks', this.props.game.ranks, props)
	}


	showRanksOnClick = () => {
		this.props.toggleViewSummary();
	};


	render() {
		return (
			<div className={'game-summary'}>
				<div>

					<div className={'show-ranks'} onClick={this.showRanksOnClick}>
						<FontAwesomeIcon icon={faBars}/>
					</div>
					<div className={'player-summaries' + (this.props.game.showLiveSummary ? ' view': ' hidden')}>

						{/*style={ !this.props.game.showLiveSummary ? {'display': 'none'}: {}}*/}
						{
							Object.keys(this.props.game.players).map((playerId, index) => {
								return (
									<div key={playerId}
									     className={'player-summary' + ('' + this.props.game.activePlayerId === playerId ? ' active' : '')}>
										<div className={'player-info'}>
											<div
												className={'player-name'}>{this.props.game.players[playerId].name}</div>
											<div className={'rank-and-points'}>
												<div className={'rank'}>
													<span>Rank: </span>
													<span>{this.props.game.wonPlayer[playerId] ?
														this.props.game.wonPlayer[playerId] :
														this.props.game.ranks[playerId] + this.props.game.currentRank}</span>
												</div>
												<div className={'points'}>
													<span>Points: </span>
													<span>{this.props.game.players[playerId].points}</span>
												</div>

											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}