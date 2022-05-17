import { SAVE_RESULTS_DATA, SAVE_RESULTS_DATA_MOVIE, SAVE_RESULTS_DATA_TV, TOGGLE_SEARCH_RESULTS } from "../actions/searchResults"

const initialState = {
    results: {
      results: [],
    },

    resultsMovie: {
      resultsMovie: [],
    }, 

    resultsTV: {
      resultsTV: [],
    }
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_RESULTS_DATA: {
          return {
            ...state,
            results: action.results,
          }
        }

        case SAVE_RESULTS_DATA_MOVIE: {
          return {
            ...state,
            resultsMovie: action.resultsMovie,
          }
        }

        case SAVE_RESULTS_DATA_TV: {
          return {
            ...state,
            resultsTV: action.resultsTV,
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