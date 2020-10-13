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


/*
* on dice roll
*
* a random no is generated between 1 and 6
* assigned to the current player
*
* if(current points of player >= minPoints to win)
*   player is removed from the queue and the player is marked as win
*
* if()
*
*
* */

//
// export const rollTheDiceActionCreator = (options) => {
// 	return (dispatch, getState) => {
//
// 		let state = getState();
// 		let action = {type: null, payload: {}};
// 		let actionSuffix = '';
// 		let message = null;
// 		let messageType = null;
//
//
// 		let diceNoGenerated = generateDiceNo();
//
//
// 		let playerQueue = state.game.playerQueue;
// 		let nextPlayerToBeInlineId = playerQueue.getFrontNext();
//
//
// 		if (nextPlayerToBeInlineId != null && state.game.players[nextPlayerToBeInlineId].penalized) {
// 			actionSuffix = _AND_DEQUE_AND_PUSH_BACK_NEXT;
// 		}
//
// 		let currentPlayerId = state.game.activePlayerId;
// 		let currentPlayer = state.game.players[currentPlayerId];
//
// 		let playerUpdatedPoints = currentPlayer.points + diceNoGenerated;
//
//
// 		let score = state.game.score;
//
//
// 		if (score[currentPlayer.points][currentPlayerId]) {
// 			delete score[currentPlayer.points][currentPlayerId];
// 		}
//
// 		score[playerUpdatedPoints][currentPlayerId] = currentPlayerId;
//
//
// 		let rank = 0;
//
// 		let ranks = {};
//
// 		for (let i = state.game.minPointsToWin + 5; i >= 0; i--) {
//
// 			if (score[i] && Object.keys(score[i]).length > 0) {
// 				rank++;
// 				Object.keys(score[i]).forEach((playerId) => {
//
// 					if (!state.game.wonPlayer[playerId]) {
// 						ranks[playerId] = rank;
// 					}
// 				})
// 			}
// 		}
//
//
// 		console.log('playerPoints', playerUpdatedPoints);
//
// 		console.log('ranks', ranks);
//
//
// 		if (playerUpdatedPoints >= state.game.minPointsToWin) {
// 			message = `${currentPlayer.name} you just won`;
// 			messageType = SUCCESS;
// 			action = getAction(
// 				`${MARK_PLAYER_AS_WIN}${actionSuffix}`,
// 				getPayload(currentPlayer, diceNoGenerated, playerUpdatedPoints)
// 			);
//
// 			delete ranks[currentPlayerId];
// 			delete score[playerUpdatedPoints][currentPlayerId];
//
//
// 			Object.keys(ranks).forEach((playerId) => {
// 				ranks[playerId] = ranks[playerId] - 1
// 			});
//
// 			console.log('post deleted rank', ranks);
//
//
// 			dispatch({
// 				type: ADD_WON_PLAYER,
// 				payload: {
// 					playerId: currentPlayerId
// 				}
// 			})
// 		} else if (diceNoGenerated === DICE_NO_WITH_EXTRA_CHANCE) {
// 			message = `${currentPlayer.name} you get an extra chance because you got a 6`;
// 			messageType = SUCCESS;
// 			action = getAction(
// 				`${UPDATE_DICE_AND_PLAYER_POINTS_AND_RANK}${actionSuffix}`,
// 				getPayload(currentPlayer, diceNoGenerated, playerUpdatedPoints)
// 			);
// 			console.log("u get an extra chance")
// 		} else {
// 			console.log("DICE_NO_WITH_PENALTY generated, currentPlayer.lastDiceGeneratedNo", currentPlayer.lastDiceGeneratedNo);
// 			console.log(`${currentPlayer.lastDiceGeneratedNo === DICE_NO_WITH_PENALTY && diceNoGenerated === DICE_NO_WITH_PENALTY ? "u are penalized" : ""}`)
//
// 			if (currentPlayer.lastDiceGeneratedNo === DICE_NO_WITH_PENALTY && diceNoGenerated === DICE_NO_WITH_PENALTY) {
// 				message = `${currentPlayer.name} next chance last because you got 2 consecutive 1's`;
// 				messageType = DANGER;
// 			}
//
//
// 			action = getAction(
// 				`${DEQUE_FRONT_AND_PUSH_BACK}${actionSuffix}`,
// 				getPayload(currentPlayer, diceNoGenerated, playerUpdatedPoints)
// 			);
//
// 		}
//
// 		dispatch(action);
// 		dispatch(getMessageAction(message, messageType));
// 		dispatch(getRanksAction(ranks));
//
// 	}
// };


// const getPayload = (currentPlayer, diceNoGenerated, playerPoints) => {
// 	return {
// 		playerId: currentPlayer.id,
// 		diceNoGenerated,
// 		points: playerPoints,
// 		penalized: currentPlayer.lastDiceGeneratedNo === DICE_NO_WITH_PENALTY && diceNoGenerated === DICE_NO_WITH_PENALTY
// 	}
// };
//
// const getAction = (type, payload) => {
// 	return {
// 		type,
// 		payload
// 	}
// };
//
// const getMessageAction = (message, messageType) => {
// 	return {
// 		type: SET_MESSAGE,
// 		payload: {
// 			message: message,
// 			messageType: messageType
// 		}
// 	}
// };


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





