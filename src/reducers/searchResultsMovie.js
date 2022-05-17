import { SAVE_RESULTS_DATA, TOGGLE_SEARCH_RESULTS } from "../actions/searchResultsMovie"

const initialState = {
    resultsMovie:null
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_RESULTS_DATA: {
          return {
            ...state,
            resultsMovie: action.resultsMovie,
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