import { SAVE_MOVIE_RESULT, TOGGLE_LOADING_MEDIA } from "../actions/mediaDetails";

const initialState = {
  loading: true,
  movieResult: undefined,
  seriesResult: undefined,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MOVIE_RESULT: {
      return {
        ...state,
        movieResult: action.responseMovie,
      }
    }
    case TOGGLE_LOADING_MEDIA: {
      return {
        ...state,
        loading: !state.loading,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;