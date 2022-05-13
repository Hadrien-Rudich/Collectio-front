import { combineReducers } from 'redux';

import headerReducer from './header';
import mainMenuReducer from './mainMenu';
import registerReducer from './register';
import loginModalReducer from './login';
import userReducer from './user';

const rootReducer = combineReducers({
  header: headerReducer,
  mainMenu: mainMenuReducer,
  register: registerReducer,
  login: loginModalReducer,
  user: userReducer,
});

export default rootReducer;