import {
  SAVE_LATEST_MOVIES_RELEASE_RESULT,
  SAVE_LATEST_SERIES_RELEASE_RESULT,
  SAVE_LATEST_BOOKS_RELEASE_RESULT,
  SAVE_LATEST_VIDEO_GAMES_RELEASE_RESULT,

  SET_LATEST_MOVIES_RELEASE_LOADING,
  SET_LATEST_SERIES_RELEASE_LOADING,
  SET_LATEST_BOOKS_RELEASE_LOADING,
  SET_LATEST_VIDEO_GAMES_RELEASE_LOADING,

  SAVE_LATEST_MOVIES_RELEASE_GLIDE,
  SAVE_LATEST_SERIES_RELEASE_GLIDE,
  SAVE_LATEST_BOOKS_RELEASE_GLIDE,
  SAVE_LATEST_VIDEO_GAMES_GLIDE,
  
} from "../actions/homePage";

const initialState = {
  latestMoviesReleaseResult: undefined,
  latestSeriesReleaseResult: undefined,
  latestBooksReleaseResult: undefined,
  latestVideoGamesReleaseResult: undefined,

  latestMoviesReleaseLoading: true,
  latestSeriesReleaseLoading: true,
  latestBooksReleaseLoading: true,
  latestVideoGamesReleaseLoading: true,

  latestMoviesReleaseGlide: undefined,
  latestSeriesReleaseGlide: undefined,
  latestBooksReleaseGlide: undefined,
  latestVideoGamesReleaseGlide: undefined,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LATEST_MOVIES_RELEASE_RESULT: {
      return {
        ...state,
        latestMoviesReleaseResult: action.newLatestMoviesReleaseResult,
      }
    }
    case SAVE_LATEST_SERIES_RELEASE_RESULT: {
      return {
        ...state,
        latestSeriesReleaseResult: action.newLatestSeriesReleaseResult,
      }
    }
    case SAVE_LATEST_BOOKS_RELEASE_RESULT: {
      return {
        ...state,
        latestBooksReleaseResult: action.newLatestBooksReleaseResult,
      }
    }
    case SAVE_LATEST_VIDEO_GAMES_RELEASE_RESULT: {
      return {
        ...state,
        latestVideoGamesReleaseResult: action.newLatestVideoGamesReleaseResult,
      }
    }
    // ------------------------------
    case SET_LATEST_MOVIES_RELEASE_LOADING: {
      return {
        ...state,
        latestMoviesReleaseLoading: action.newLatestMoviesReleaseLoading,
      }
    }
    case SET_LATEST_SERIES_RELEASE_LOADING: {
      return {
        ...state,
        latestSeriesReleaseLoading: action.newLatestSeriesReleaseLoading,
      }
    }
    case SET_LATEST_BOOKS_RELEASE_LOADING: {
      return {
        ...state,
        latestBooksReleaseLoading: action.newLatestBooksReleaseLoading,
      }
    }
    case SET_LATEST_VIDEO_GAMES_RELEASE_LOADING: {
      return {
        ...state,
        latestVideoGamesReleaseLoading: action.newLatestVideoGamesReleaseLoading,
      }
    }
    // ------------------------------
    case SAVE_LATEST_MOVIES_RELEASE_GLIDE: {
      return {
        ...state,
        latestMoviesReleaseGlide: action.newLatestMoviesReleaseGlide,
      }
    }
    case SAVE_LATEST_SERIES_RELEASE_GLIDE: {
      return {
        ...state,
        latestSeriesReleaseGlide: action.newLatestSeriesReleaseGlide,
      }
    }
    case SAVE_LATEST_BOOKS_RELEASE_GLIDE: {
      return {
        ...state,
        latestBooksReleaseGlide: action.newLatestBooksReleaseGlide,
      }
    }
    case SAVE_LATEST_VIDEO_GAMES_GLIDE: {
      return {
        ...state,
        latestVideoGamesReleaseGlide: action.newLatestVideoGamesReleaseGlide,
      }
    }
    // ------------------------------
    default: {
      return {
        ...state,
      }
    }
  }
}

export default reducer;