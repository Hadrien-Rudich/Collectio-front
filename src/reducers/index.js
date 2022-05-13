import { combineReducers } from 'redux';
import mainMenuReducer from './mainMenu';
import loginModalReducer from './loginModal';
import headerReducer from './header';
import searchResultsReducer from './searchResults'

const rootReducer = combineReducers({
  mainMenu: mainMenuReducer,
  loginModal: loginModalReducer,
  header: headerReducer,
  searchResults: searchResultsReducer,
});

export default rootReducer;