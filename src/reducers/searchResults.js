import { SAVE_RESULTS_DATA, TOGGLE_SEARCH_RESULTS } from "../actions/searchResults"

const initialState = {
    results: []
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_RESULTS_DATA: {
          return {
            ...state,
            results: action.results,
          }
        }

        case TOGGLE_SEARCH_RESULTS: {
            return {
              ...state,
            }
          }
    
          default: {
            return state;
          }
    }

}

export default reducer