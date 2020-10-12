import {combineReducers} from "redux";


// reducer imports
import gameReducer from './redux.reducer.game'

const rootReducer = combineReducers({
  game: gameReducer,
});


export default rootReducer;