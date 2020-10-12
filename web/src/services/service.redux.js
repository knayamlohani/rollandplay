import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import rootReducer from './../redux/reducer/redux.reducer.root'
import QueueImmutable from './service.queue'




const store = createStore(
	rootReducer,
	{
		game: {
			playerCount: 0,
			minPointsToWin: 0,
			playerOrdering: [],
			playerQueue: new QueueImmutable([]),
			activePlayerId: null,
			diceNoGenerated: null,
			score: [],
			ranks: {},
			currentRank: 0,
			showLiveSummary: true,
			wonPlayer: {

			},
			players: {
				// 1: {
				// 	name: `Player-1`,
				// 	points: 0,
				// 	rank: 0,
				// 	id: 1,
				// 	lastDiceGeneratedNo: null
				// },
				// 2: {
				// 	name: `Player-2`,
				// 	points: 0,
				// 	rank: 0,
				// 	id: 2,
				// 	lastDiceGeneratedNo: null
				// },
				// 3: {
				// 	name: `Player-3`,
				// 	points: 0,
				// 	rank: 0,
				// 	id: 3,
				// 	lastDiceGeneratedNo: null
				// },
				// 4: {
				// 	name: `Player-4`,
				// 	points: 0,
				// 	rank: 0,
				// 	id: 4,
				// 	lastDiceGeneratedNo: null
				// },
				// 5: {
				// 	name: `Player-5`,
				// 	points: 0,
				// 	rank: 0,
				// 	id: 5,
				// 	lastDiceGeneratedNo: null
				// }

			}
		}
	},
	applyMiddleware(thunk)
);

export default store;
