import { combineReducers } from 'redux';
import mainMenuReducer from './mainMenu';

const rootReducer = combineReducers({
  mainMenu: mainMenuReducer,
});

export default rootReducer;