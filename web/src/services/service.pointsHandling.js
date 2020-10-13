import player from "../class/player";
import {DICE_NO_WITH_EXTRA_CHANCE, DICE_NO_WITH_PENALTY, SUCCESS} from "../constant/constant.game";
import {ADD_WON_PLAYER, MARK_PLAYER_AS_WIN} from "../redux/action/redux.action.game";


export const checkIfPlayerHasWon = (currentPlayer, diceNoGenerated, minPointsToWin) => {
	return currentPlayer.points + diceNoGenerated >= minPointsToWin;
};


// player won then remove the player from queue and add to won player list
// this players rank will be rank of the last player who won + 1
// this users rank will be deleted from the tracked ranks (for the players who are still playing)
export const handleCurrentPlayerWonCase = (currentPlayer, diceNoGenerated, state) => {

	let currentPlayerUpdatedPoints = currentPlayer.points + diceNoGenerated;
	let wonPlayers = state.game.wonPlayer;
	let ranks = state.game.ranks;
	let score = state.game.score;
	let currentRank = state.game.currentRank + 1;
	let playerQueue = state.game.playerQueue;
	let players = state.game.players;
	let updates = {};


	if (currentPlayerUpdatedPoints >= state.game.minPointsToWin) {


		playerQueue.popFront();


		wonPlayers[currentPlayer.id] = currentRank;
		delete ranks[currentPlayer.id];
		delete score[currentPlayerUpdatedPoints][currentPlayer.id];


		// decrease rank of players in currently tracked ranks
		Object.keys(ranks).forEach((playerId) => {
			ranks[playerId] = ranks[playerId] - 1
		});

		let message = `${currentPlayer.name} you just won`;

		let skippedPlayers = handleCaseWhereNexInLineIsPenalized(playerQueue, players);

		if(skippedPlayers.length > 0) {
			skippedPlayers.forEach( (playerId) => {
				message += ` ${state.game.players[playerId].name} `
			});

			message += ' skipped'
		}

		updates = {
			diceNoGenerated: diceNoGenerated,
			playerQueue: playerQueue,
			wonPlayers: wonPlayers,
			ranks: ranks,
			score: score,
			activePlayerId: playerQueue.getFront(),
			previousPlayerId: currentPlayer.id,
			players: {
				...state.game.players,
				[currentPlayer.id]: {
					...players[currentPlayer.id],
					points: currentPlayerUpdatedPoints,
					lastDiceGeneratedNo: diceNoGenerated
				}
			},
			message: message,
			currentRank: state.game.currentRank + 1
		}

	}

	return updates;


	// remove elementFrom the queue and add to won players
};


export const checkIfPlayerGetsAnExtraChance = (diceNoGenerated) => {
	return diceNoGenerated === DICE_NO_WITH_EXTRA_CHANCE;
};


// if current player get an extra change
// update his points and dont update the queue
export const handleCurrentPlayerGetsAnExtraChanceCase = (currentPlayer, diceNoGenerated, state) => {

	let currentPlayerUpdatedPoints = currentPlayer.points + diceNoGenerated;
	let currentPlayerId = currentPlayer.id;
	let players = state.game.players;


	let updates = {
		diceNoGenerated: diceNoGenerated,
		players: {
			...state.game.players,
			[currentPlayerId]: {
				...players[currentPlayerId],
				points: currentPlayerUpdatedPoints,
				lastDiceGeneratedNo: diceNoGenerated
			}
		},
		previousPlayerId: currentPlayer.id,
		message: `${currentPlayer.name} you get an extra chance because you got a 6`,
		score: state.game.score,
		ranks: state.game.ranks
	};

	return updates;


	// remove elementFrom the queue and add to won players
};

// 2 consecutive one -> player is penalized hence next chance lost by user
// checks if current dice generated == last generated dice no == 1
export const checkIfPlayerGetsPenalizedAndLosesHisNextChance = (diceNoGenerated, lastDiceGeneratedNo) => {
	console.log(diceNoGenerated, lastDiceGeneratedNo, DICE_NO_WITH_PENALTY);
	return diceNoGenerated == lastDiceGeneratedNo && diceNoGenerated == DICE_NO_WITH_PENALTY;
};


// handle normal dice roll case - user has not won, has not got an extra chance
// pop the current player from queue front and push back to the queue
export const handleRestDiceRollCase = (currentPlayer, diceNoGenerated, state, isPenalized) => {

	let currentPlayerUpdatedPoints = currentPlayer.points + diceNoGenerated;
	let playerQueue = state.game.playerQueue;


	// pop from front and add back to the queue
	let pop = playerQueue.popFront();
	playerQueue.pushBack(pop.poppedElement);


	let message = isPenalized ? `${currentPlayer.name} next chance last because you got 2 consecutive 1's`: '';


	let skippedPlayers = handleCaseWhereNexInLineIsPenalized(playerQueue, state.game.players);

	if(skippedPlayers.length > 0) {
		skippedPlayers.forEach( (playerId) => {
			message += ` ${state.game.players[playerId].name} `
		});

		message += ' skipped'
	}


	let updates = {
		playerQueue: playerQueue,
		diceNoGenerated: diceNoGenerated,
		players: {
			...state.game.players,
			[currentPlayer.id]: {
				...state.game.players[currentPlayer.id],
				points: currentPlayerUpdatedPoints,
				lastDiceGeneratedNo: diceNoGenerated,
				penalized: isPenalized
			}
		},
		activePlayerId: playerQueue.getFront(),
		previousPlayerId: currentPlayer.id,
		score: state.game.score,
		ranks: state.game.ranks,
		message: message
	};

	return updates;
};


// handles the case of if the next in queue to be processed is penalized for getting 2 consecutive 1's
// just pop that player from the queue and push back
const handleCaseWhereNexInLineIsPenalized = (playerQueue, players) => {

	let popped = null;
	let skippedPlayers = []

	console.log('old queue', playerQueue._elements);

	// loop why ? to handle if consecutive players in queue have all been penalized
	// then keep poppin them mark them as un-penalized (so that can be processed in next iteration of queue) and push back to queue
	while (playerQueue.getFront() && players[playerQueue.getFront()].penalized) {

		skippedPlayers.push(playerQueue.getFront());

		popped = playerQueue.popFront();
		players[popped.poppedElement].penalized = false;
		playerQueue.pushBack(popped.poppedElement)


		console.log('new queue', playerQueue._elements);
	}

	return skippedPlayers;

};


// handling ranks

// keeps an index in range - 0 to pointsToWin + 5 (max points that can be accumulated is pointsToWin + 5)
// keeps against the index (points) -> tracks all the players having those points
// traverses from the mac points to 0 and generates ranks based on points that are filled

// suppose score[20] -> 1,2,3 players
// suppose score[10] -> 4,5
// suppose score[5] -> 9

// players - 1,2,3 - have ranks 1
// players - 4,5 have ranks 2
// players - 9 will have rank 3

// any player who has already won will not be considered


export const updateCurrentRanksBasedOnDiceRoll = (currentPlayer, diceNoGenerated, score, minPointsToWin, wonPlayer) => {

	let currentPlayerUpdatedPoints = currentPlayer.points + diceNoGenerated;

	// console.log('score', score, 'current player', currentPlayer);
	// console.log('currentPlayerUpdatedPoints', currentPlayerUpdatedPoints);

	// since we got a new score that the player id against the old score
	if (score[currentPlayer.points][currentPlayer.id]) {
		delete score[currentPlayer.points][currentPlayer.id];
	}

	// add player against the new score
	score[currentPlayerUpdatedPoints][currentPlayer.id] = currentPlayer.id;

	// console.log('score', score);


	let rank = 0;

	let ranks = {};


	for (let i = minPointsToWin + 5; i >= 0; i--) {

		if (score[i] && Object.keys(score[i]).length > 0) {
			rank++;
			Object.keys(score[i]).forEach((playerId) => {

				// skip already won players
				if (!wonPlayer[playerId]) {
					ranks[playerId] = rank;
				}
			})
		}
	}


	// console.log('playerPoints', playerUpdatedPoints);

	// console.log('ranks', ranks);
	//
	//
	// console.log("ranks, score", JSON.stringify(ranks), JSON.stringify(score, null, 4));


	return {
		score: score,
		ranks: ranks
	};
};