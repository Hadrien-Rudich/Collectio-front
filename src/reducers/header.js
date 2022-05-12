import {TOGGLE_SEARCH_BAR, SEARCH_TITLE_VALUE} from "../actions/searchBar";


const initialState = {
    searchBar: "" 
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SEARCH_TITLE_VALUE: {
        return {
          ...state,
          searchBar: action.titleValue,
        }
      }
  
      case TOGGLE_SEARCH_BAR: {
        return {
          ...state,
        }
      }

      default: {
        return state;
      }
    }
  };



export default reducer;