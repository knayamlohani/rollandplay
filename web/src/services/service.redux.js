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
			}
		}
	},
	applyMiddleware(thunk)
);

export default store;
