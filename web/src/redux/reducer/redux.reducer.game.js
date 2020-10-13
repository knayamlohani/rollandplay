import * as GAME_ACTION from '../action/redux.action.game'
import {UPDATE_DICE_AND_PLAYER_POINTS_AND_RANK} from "../action/redux.action.game";
import {_AND_DEQUE_AND_PUSH_BACK_NEXT} from "../../constant/constant.game";
import {UPDATE_GAME_CONFIG} from "../action/redux.action.game";
import {SET_PLAYER_QUEUE_AND_ORDERING_AND_PLAYERS} from "../action/redux.action.game";
import {UPDATE_RANKS} from "../action/redux.action.game";
import {ADD_WON_PLAYER} from "../action/redux.action.game";
import {RESET_DATA} from "../action/redux.action.game";
import QueueImmutable from "../../services/service.queue";
import {TOGGLE_VIEW_SUMMARY} from "../action/redux.action.game";
import {UPDATE_STATE} from "../action/redux.action.game";

const gameReducer = (state = {}, action) => {

	console.log('action ...', action);
	let tempState = null;
	let poppedElement = null;
	let playerQueue = null;
	let queue = null;

	switch (action.type) {


		case GAME_ACTION.MARK_PLAYER_AS_WIN:
			return reduceMarkPlayerAsWinAction(state, action);

		case `${GAME_ACTION.MARK_PLAYER_AS_WIN}${_AND_DEQUE_AND_PUSH_BACK_NEXT}`:
			tempState = reduceMarkPlayerAsWinAction(state, action);
			({poppedElement, queue} = tempState.playerQueue.popFront());
			playerQueue = queue.pushBack(poppedElement);
			return {
				...tempState,
				playerQueue

			};


		case UPDATE_DICE_AND_PLAYER_POINTS_AND_RANK:
			return reduceUpdatedDiceAndPlayerPointsAndRank(state, action);


		case `${UPDATE_DICE_AND_PLAYER_POINTS_AND_RANK}${_AND_DEQUE_AND_PUSH_BACK_NEXT}`:
			tempState = reduceUpdatedDiceAndPlayerPointsAndRank(state, action);
			({poppedElement, queue} = tempState.playerQueue.popFront());
			playerQueue = queue.pushBack(poppedElement);
			return {
				...tempState,
				playerQueue

			};


		case GAME_ACTION.DEQUE_FRONT_AND_PUSH_BACK:
			return reduceDequeFrontAndPushBack(state, action);


		case `${GAME_ACTION.DEQUE_FRONT_AND_PUSH_BACK}${_AND_DEQUE_AND_PUSH_BACK_NEXT}`:
			tempState = reduceDequeFrontAndPushBack(state, action);
			({poppedElement, queue} = tempState.playerQueue.popFront());
			playerQueue = queue.pushBack(poppedElement);
			return {
				...tempState,
				playerQueue

			};

		case GAME_ACTION.SET_MESSAGE:
			return {
				...state,
				message: action.payload.message,
				// messageType: action.payload.messageType
			};


		case UPDATE_GAME_CONFIG:
			let {field, value} = action.payload;
			return {
				...state,
				[field]: value,
			};

		case SET_PLAYER_QUEUE_AND_ORDERING_AND_PLAYERS:
			return {
				...state,
				...action.payload,
				activePlayerId: action.payload.playerOrdering[0],
				currentRank: 0,
				wonPlayer: {}
			};

		case UPDATE_RANKS:
			return {
				...state,
				ranks: action.payload.ranks
			};

		case ADD_WON_PLAYER:
			let playerId = action.payload.playerId;
			console.log('state.game', state);
			let currentRank = state.currentRank;
			return {
				...state,
				wonPlayer: {
					...state.wonPlayer,
					[playerId]: currentRank + 1
				},
				currentRank: currentRank + 1
			};

		case  TOGGLE_VIEW_SUMMARY:
			let showLiveSummary = state.showLiveSummary;
			return {
				...state,
				showLiveSummary: !showLiveSummary
			};


		case UPDATE_STATE:
			return {
				...state,
				...action.payload.updates
			};


		default:
			return state;
	}
};


const reduceMarkPlayerAsWinAction = (state, action) => {
	let previousPlayerId = state.activePlayerId;
	let {poppedElement, queue} = state.playerQueue.popFront();

	return {
		...diceRollHandling(state, action, poppedElement, queue, previousPlayerId)
	};
};


const reduceUpdatedDiceAndPlayerPointsAndRank = (state, action) => {

	return {
		...diceRollHandling(state, action, state.playerQueue.getFront(), state.playerQueue)
	};
};


const reduceDequeFrontAndPushBack = (state, action) => {
	let previousPlayerId = state.activePlayerId;
	let {poppedElement, queue} = state.playerQueue.popFront();
	console.log(poppedElement, queue);
	let playerQueue = queue.pushBack(poppedElement);

	return {
		...diceRollHandling(state, action, poppedElement, playerQueue, previousPlayerId)
	};
};


const diceRollHandling = (state, action, playerId, playerQueue, previousPlayerId) => {
	return {
		...state,
		playerQueue,
		diceNoGenerated: action.payload.diceNoGenerated,
		players: {
			...state.players,
			[playerId]: {
				...state.players[playerId],
				points: action.payload.points,
				rank: action.payload.rank,
				lastDiceGeneratedNo: action.payload.diceNoGenerated,
				penalized: action.payload.penalized
			}
		},
		activePlayerId: playerQueue.getFront(),
		previousPlayerId: previousPlayerId,
		lastDiceGeneratedNo: action.payload.diceNoGenerated
	};
};

export default gameReducer;