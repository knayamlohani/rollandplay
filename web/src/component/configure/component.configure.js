import React, {Component} from "react";
import {Link} from "react-router-dom";


import './component.configure.less'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";

export default class Configure extends Component {
	constructor(props) {
		super(props);
	}


	// updates player count and minPoints to win in redux state
	onChangeHandler = (e) => {
		let field = e.target.name;
		let value = e.target.value;

		this.props.updateGameConfigActionCreator({
			field,
			value
		})
	};


	// on form submit call determineAndSetPlayerOrdering to set no of players, min points to win , determine initial player ordering and setup queue
	onConfigure = (e) => {
		console.log("on configure");
		this.props.determineAndSetPlayerOrdering();
		this.props.history.push('/play');
	};


	render() {

		return (
			<div className={'configure-component'}>
				<form onSubmit={(e) => {
					e.preventDefault();
				}}>
					<div className={'input-group'}>
						<div>
							<label className={'input-label'} htmlFor={'player-count'}>No of Players</label>
						</div>
						<div>
							<input
								className={'input'}
								type="number"
								name={"playerCount"}
								id={'player-count'}
								onChange={this.onChangeHandler}
								value={this.props.game.playerCount}
							/>
						</div>
					</div>
					<div className={'input-group'}>
						<div>
							<label className={'input-label'} htmlFor={'min-points-to-win'}>Points to Win</label>
						</div>
						<div>
							<input
								className={'input'}
								type="number"
								name={"minPointsToWin"}
								id={'min-points-to-win'}
								onChange={this.onChangeHandler}
								value={this.props.game.minPointsToWin}
							/>
						</div>
					</div>


					<div className={'input-group submit'}>
						<button onClick={this.onConfigure}
						      disabled={this.props.game.playerCount <= 0 || this.props.game.minPointsToWin <= 0}>
							<div className={'action-icon'}>
								<FontAwesomeIcon icon={faArrowCircleRight}/>
							</div>
						</button>
					</div>
				</form>
			</div>
		);
	}
}