import { SAVE_VIDEO_GAME_RESULT, SET_VIDEO_GAME_LOADING } from "../actions/videoGameDetails";

const initialState = {
  loading: true,
  videoGameResult: undefined,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_VIDEO_GAME_RESULT: {
      return {
        ...state,
        videoGameResult: action.videoGameResponse,
      }
    }
    case SET_VIDEO_GAME_LOADING: {
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