import { combineReducers } from 'redux';
import mainMenuReducer from './mainMenu';
import loginModalReducer from './loginModal';
import registerReducer from './register';

const rootReducer = combineReducers({
  mainMenu: mainMenuReducer,
  loginModal: loginModalReducer,
  register: registerReducer,
});

export default rootReducer;