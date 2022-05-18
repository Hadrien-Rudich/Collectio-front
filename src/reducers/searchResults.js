import { SAVE_RESULTS_DATA, SAVE_RESULTS_DATA_MOVIE, SAVE_RESULTS_DATA_TV, SAVE_RESULTS_DATA_VIDEOGAMES, TOGGLE_SEARCH_RESULTS } from "../actions/searchResults"

const initialState = {
    results: {
      results: [],
    },

    resultsMovie: {
      resultsMovie: [],
    }, 

    resultsTV: {
      resultsTV: [],
    },

    resultsVideoGames: {
      resultsVideoGames: [],
    },
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
          // console.log("JE SUIS DANS LE REDUCER action.resultsMovie", action.resultsMovie)
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

        case SAVE_RESULTS_DATA_VIDEOGAMES: {
          return {
            ...state,
            resultsVideoGames: action.resultsVideoGames,
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