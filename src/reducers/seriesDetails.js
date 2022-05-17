import { SAVE_SERIES_RESULTS, SET_SERIES_LOADING } from "../actions/seriesDetails";


const initialState = {
  loading: true,
  seriesResults: {
    series: undefined,
    cast: undefined,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERIES_RESULTS: {
      return {
        ...state,
        seriesResults: {
          ...state.seriesResults,
          series: action.seriesResponse,
          cast: action.seriesCastResponse,
        },
      }
    }
    case SET_SERIES_LOADING: {
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