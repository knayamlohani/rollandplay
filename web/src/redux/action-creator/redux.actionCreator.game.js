import {generateDiceNo, shuffle} from './../../services/service.game'
import {
	SET_PLAYER_QUEUE_AND_ORDERING_AND_PLAYERS,
	UPDATE_GAME_CONFIG, TOGGLE_VIEW_SUMMARY, UPDATE_STATE
} from "../action/redux.action.game";

import QueueImmutable from "../../services/service.queue";
import Player from "../../class/player";
import {
	checkIfPlayerGetsAnExtraChance, checkIfPlayerGetsPenalizedAndLosesHisNextChance,
	checkIfPlayerHasWon, handleCurrentPlayerGetsAnExtraChanceCase,
	handleCurrentPlayerWonCase, handleRestDiceRollCase, updateCurrentRanksBasedOnDiceRoll
} from "../../services/service.pointsHandling";


export const updateGameConfigActionCreator = (payload) => {
	return {
		type: UPDATE_GAME_CONFIG,
		payload
	}
};


// set no of player, min points to win , determine initial player ordering and setup queue
export const determineAndSetPlayerOrdering = () => {
	return (dispatch, getState) => {
		let state = getState();
		let playerCount = state.game.playerCount;
		let playerOrdering = [];
		let ranks = {};

		for (let i = 1; i <= playerCount; i++) {
			playerOrdering.push(i);
			ranks[i] = 0;

		}


		// fisher yates shuffling to generate initial random ordering for players
		shuffle(playerOrdering);


		let playerQueue = new QueueImmutable(playerOrdering);
		let players = {};
		let score = [];

		for (let i = 0; i <= parseInt(state.game.minPointsToWin) + 5; i++) {
			score[i] = {}
		}


		// set all players against score 0
		playerOrdering.forEach((playerId) => {
			players[playerId] = new Player(playerId);
			score[0][playerId] = playerId;
		});


		dispatch({
			type: SET_PLAYER_QUEUE_AND_ORDERING_AND_PLAYERS,
			payload: {
				playerQueue,
				players,
				playerOrdering,
				score,
				ranks,
				message: null,
				lastDiceGeneratedNo: null,
				previousPlayerId: null
			}
		});

	}
};


// const getRanksAction = (ranks) => {
// 	return {
// 		type: UPDATE_RANKS,
// 		payload: {
// 			ranks
// 		}
// 	}
// };


export const toggleViewSummary = () => {
	return {
		type: TOGGLE_VIEW_SUMMARY
	}
};


export const handlDiceRoleAction = (options) => {
	return (dispatch, getState) => {
		dispatch(
			handleDiceRole(getState())
		);
	}
};


// handles every dice role and subsequent actions to be taken
export const handleDiceRole = (state) => {
	let updatedState = null;


	let diceNoGenerated = generateDiceNo();
	console.log('diceNoGenerated', diceNoGenerated);
	let currentPlayerId = state.game.activePlayerId;
	let currentPlayer = state.game.players[currentPlayerId];

	console.log('state: ', state);

	// generates rank and score
	let scoreAndRank = updateCurrentRanksBasedOnDiceRoll(currentPlayer, diceNoGenerated, state.game.score, state.game.minPointsToWin, state.game.wonPlayer);

	state.game.score = scoreAndRank.score;
	state.game.ranks = scoreAndRank.ranks;

	// if player one remove from queue
	if (checkIfPlayerHasWon(currentPlayer, diceNoGenerated, state.game.minPointsToWin)) {
		console.log('player has won');
		updatedState = handleCurrentPlayerWonCase(currentPlayer, diceNoGenerated, state)
	} else if (checkIfPlayerGetsAnExtraChance(diceNoGenerated)) {
		// player hits a six gets an extra chance
		console.log('player gets an extra chance');
		updatedState = handleCurrentPlayerGetsAnExtraChanceCase(currentPlayer, diceNoGenerated, state);
	} else {

		console.log('other case', currentPlayer);

		// other cases pop player from front and push back to queue
		// if player last chance was 1 and current is also then then mark player as penalized to skip next chance
		let playerPenalized = checkIfPlayerGetsPenalizedAndLosesHisNextChance(diceNoGenerated, currentPlayer.lastDiceGeneratedNo);

		if (playerPenalized) {
			console.log('you are penalized');
		}

		updatedState = handleRestDiceRollCase(currentPlayer, diceNoGenerated, state, playerPenalized)
	}


	// console.log(JSON.stringify(updatedState, null, 4));


	return {
		type: UPDATE_STATE,
		payload: {
			updates: updatedState
		}
	}

};





