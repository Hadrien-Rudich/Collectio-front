import { combineReducers } from 'redux';
import mainMenuReducer from './mainMenu';
import loginModalReducer from './loginModal';
import headerReducer from './header'

const rootReducer = combineReducers({
  mainMenu: mainMenuReducer,
  loginModal: loginModalReducer,
  header: headerReducer
});

export default rootReducer;