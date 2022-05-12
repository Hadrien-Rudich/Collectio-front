import { combineReducers } from 'redux';

import headerReducer from './header';
import mainMenuReducer from './mainMenu';
import registerReducer from './register';
import loginModalReducer from './login';

const rootReducer = combineReducers({
  header: headerReducer,
  mainMenu: mainMenuReducer,
  register: registerReducer,
  login: loginModalReducer,
});

export default rootReducer;