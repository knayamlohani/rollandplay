import React from 'react'
import Message from "../message/component.message";
import {Dice} from "../dice/component.dice";
import GameSummary from "../game-summary/component.gameSummary";


import './component.gamePage.less'
import GameStats from "../game-stats/component.gameStats";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

export default class GamePage extends React.Component {
	constructor(props) {
		super(props);
		console.log('game page props', props);


		if (!this.props.game.playerQueue || this.props.game.playerQueue.isEmpty()) {
			this.props.history.push('/configure');
		}


	}

	render() {
		return (
			<div className={'game-page'}>
				{
					Object.keys(this.props.game.wonPlayer).length != this.props.game.playerCount && this.props.game.playerCount != 0 &&
					<div>
						<div className={'game-config-info'}>
							<div className={'info'}>{this.props.game.playerCount}: Players</div>
							<div className={'info'}>{this.props.game.minPointsToWin}: Points</div>
						</div>
						<div className={'player-queue'}>

							{
								this.props.game.playerQueue._elements.map((playerId, index) => {
									return (
										<div className={'queue-element'} key={playerId}>
											<span>{this.props.game.players[playerId].name}</span>
											<span
												className={'next-icon' + (index === this.props.game.playerQueue._elements.length - 1 ? ' hidden' : '')}>
												<FontAwesomeIcon icon={faChevronRight}/>
											</span>
										</div>
									);
								})
							}
						</div>
						<div className={'active-player-container'}>
							{
								this.props.game.activePlayerId &&
								<div className={'active-player'}>
									<div
										className={'active-player-name'}>{this.props.game.players[this.props.game.activePlayerId].name}
									</div>
									<div className={'active-player-message'}>
										your chance to roll the dice
									</div>
									<div className={'active-player-info'}>
										<div className={'active-player-rank'}>
											<span>Rank: </span>
											<span><span>{this.props.game.wonPlayer[this.props.game.activePlayerId] ?
												this.props.game.wonPlayer[this.props.game.activePlayerId] :
												this.props.game.ranks[this.props.game.activePlayerId] + this.props.game.currentRank}</span></span>
										</div>
										<div className={'active-player-points'}>
											<span>Points: </span>
											<span>{this.props.game.players[this.props.game.activePlayerId].points}</span>
										</div>

									</div>
								</div>
							}
						</div>


						<Dice
							diceNoGenerated={this.props.game.diceNoGenerated}
							// rollTheDice={this.props.rollTheDiceActionCreator}
							rollTheDice={this.props.handlDiceRoleAction}
						/>


						<Message message={this.props.game.message}
						         messageType={this.props.game.messageType}
						/>

						{
							this.props.game.previousPlayerId &&
							<div className={'last-player-container'}>
								<div className={'last-player'}>
									<div className={'last-player-message'}>
										{this.props.game.players[this.props.game.previousPlayerId].name} scored {this.props.game.diceNoGenerated}
									</div>

								</div>
							</div>
						}


						<GameSummary {...this.props} />
					</div>
				}


				{
					Object.keys(this.props.game.wonPlayer).length == this.props.game.playerCount && this.props.game.playerCount != 0 &&
					<GameStats {...this.props} />
				}

			</div>
		)
	}
}