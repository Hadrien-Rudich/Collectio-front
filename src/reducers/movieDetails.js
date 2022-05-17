import { SAVE_MOVIE_RESULTS, SET_MOVIE_LOADING } from "../actions/movieDetails";

const initialState = {
  loading: true,
  movieResults: {
    movie: undefined,
    cast: undefined,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MOVIE_RESULTS: {
      return {
        ...state,
        movieResults: {
          ...state.movieResults,
          movie: action.movieResponse,
          cast: action.movieCastResponse,
        },
      }
    }
    case SET_MOVIE_LOADING: {
      return {
        ...state,
        loading: action.newLoadingValue,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;