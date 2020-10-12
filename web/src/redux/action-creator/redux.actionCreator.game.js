import {generateDiceNo, shuffle} from './../../services/service.game'
import {
	_AND_DEQUE_AND_PUSH_BACK_NEXT, DANGER,
	DICE_NO_WITH_EXTRA_CHANCE,
	DICE_NO_WITH_PENALTY, SUCCESS
} from "../../constant/constant.game";
import {
	MARK_PLAYER_AS_WIN,
	SET_MESSAGE,
	SET_PLAYER_QUEUE_AND_ORDERING_AND_PLAYERS,
	UPDATE_RANKS,
	UPDATE_GAME_CONFIG, ADD_WON_PLAYER, TOGGLE_VIEW_SUMMARY
} from "../action/redux.action.game";
import {DEQUE_FRONT_AND_PUSH_BACK} from "../action/redux.action.game";
import {UPDATE_DICE_AND_PLAYER_POINTS_AND_RANK} from "../action/redux.action.game";
import QueueImmutable from "../../services/service.queue";
import Player from "../../class/player";


export const rollTheDiceActionCreator = (options) => {
	return (dispatch, getState) => {

		let state = getState();
		let action = {type: null, payload: {}};
		let actionSuffix = '';
		let message = null;
		let messageType = null;


		let diceNoGenerated = generateDiceNo();


		let playerQueue = state.game.playerQueue;
		let nextPlayerToBeInlineId = playerQueue.getFrontNext();


		if (nextPlayerToBeInlineId != null && state.game.players[nextPlayerToBeInlineId].penalized) {
			actionSuffix = _AND_DEQUE_AND_PUSH_BACK_NEXT;
		}

		let currentPlayerId = state.game.activePlayerId;
		let currentPlayer = state.game.players[currentPlayerId];

		let playerUpdatedPoints = currentPlayer.points + diceNoGenerated;


		let score = state.game.score;


		if (score[currentPlayer.points][currentPlayerId]) {
			delete score[currentPlayer.points][currentPlayerId];
		}

		score[playerUpdatedPoints][currentPlayerId] = currentPlayerId;


		let rank = 0;

		let ranks = {};

		for (let i = state.game.minPointsToWin + 5; i >= 0; i--) {

			if (score[i] && Object.keys(score[i]).length > 0) {
				rank++;
				Object.keys(score[i]).forEach((playerId) => {

					if (!state.game.wonPlayer[playerId]) {
						ranks[playerId] = rank;
					}
				})
			}
		}


		console.log('playerPoints', playerUpdatedPoints);

		console.log('ranks', ranks);


		if (playerUpdatedPoints >= state.game.minPointsToWin) {
			message = `${currentPlayer.name} you just won`;
			messageType = SUCCESS;
			action = getAction(
				`${MARK_PLAYER_AS_WIN}${actionSuffix}`,
				getPayload(currentPlayer, diceNoGenerated, playerUpdatedPoints)
			);

			delete ranks[currentPlayerId];
			delete score[playerUpdatedPoints][currentPlayerId];


			Object.keys(ranks).forEach( (playerId) => {
				ranks[playerId] = ranks[playerId] - 1
			});

			console.log('post deleted rank', ranks);


			dispatch({
				type: ADD_WON_PLAYER,
				payload: {
					playerId: currentPlayerId
				}
			})
		} else if (diceNoGenerated === DICE_NO_WITH_EXTRA_CHANCE) {
			message = `${currentPlayer.name} you get an extra chance because you got a 6`;
			messageType = SUCCESS;
			action = getAction(
				`${UPDATE_DICE_AND_PLAYER_POINTS_AND_RANK}${actionSuffix}`,
				getPayload(currentPlayer, diceNoGenerated, playerUpdatedPoints)
			);
			console.log("u get an extra chance")
		} else {
			console.log("DICE_NO_WITH_PENALTY generated, currentPlayer.lastDiceGeneratedNo", currentPlayer.lastDiceGeneratedNo);
			console.log(`${currentPlayer.lastDiceGeneratedNo === DICE_NO_WITH_PENALTY && diceNoGenerated === DICE_NO_WITH_PENALTY ? "u are penalized" : ""}`)

			if (currentPlayer.lastDiceGeneratedNo === DICE_NO_WITH_PENALTY && diceNoGenerated === DICE_NO_WITH_PENALTY) {
				message = `${currentPlayer.name} next chance last because you got 2 consecutive 1's`;
				messageType = DANGER;
			}


			action = getAction(
				`${DEQUE_FRONT_AND_PUSH_BACK}${actionSuffix}`,
				getPayload(currentPlayer, diceNoGenerated, playerUpdatedPoints)
			);

		}

		dispatch(action);
		dispatch(getMessageAction(message, messageType));
		dispatch(getRanksAction(ranks));

	}
};


const getPayload = (currentPlayer, diceNoGenerated, playerPoints) => {
	return {
		playerId: currentPlayer.id,
		diceNoGenerated,
		points: playerPoints,
		penalized: currentPlayer.lastDiceGeneratedNo === DICE_NO_WITH_PENALTY && diceNoGenerated === DICE_NO_WITH_PENALTY
	}
};

const getAction = (type, payload) => {
	return {
		type,
		payload
	}
};

const getMessageAction = (message, messageType) => {
	return {
		type: SET_MESSAGE,
		payload: {
			message: message,
			messageType: messageType
		}
	}
};


export const updateGameConfigActionCreator = (payload) => {
	return {
		type: UPDATE_GAME_CONFIG,
		payload
	}
};


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


		shuffle(playerOrdering);


		let playerQueue = new QueueImmutable(playerOrdering);
		let players = {};
		let score = [];

		for (let i = 0; i <= parseInt(state.game.minPointsToWin) + 5; i++) {
			score[i] = {}
		}


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


const getRanksAction = (ranks) => {
	return {
		type: UPDATE_RANKS,
		payload: {
			ranks
		}
	}
};


export const toggleViewSummary = () => {
	return {
		type: TOGGLE_VIEW_SUMMARY
	}
};
