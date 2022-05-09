import { combineReducers } from 'redux';
import mainMenuReducer from './mainMenu';
import loginModalReducer from './loginModal';

const rootReducer = combineReducers({
  mainMenu: mainMenuReducer,
  loginModal: loginModalReducer,
});

export default rootReducer;