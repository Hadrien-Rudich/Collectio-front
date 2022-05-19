export const FETCH_VIDEO_GAME_DETAILS = 'FETCH_VIDEO_GAME_DETAILS';
export const SET_VIDEO_GAME_LOADING = 'SET_VIDEO_GAME_LOADING';
export const SAVE_VIDEO_GAME_RESULT = 'SAVE_VIDEO_GAME_RESULT';

export const fetchVideoGameDetails = (videoGameId) => ({
  type: FETCH_VIDEO_GAME_DETAILS,
  videoGameId,
});

export const setVideoGameLoading = (newLoadingValue) => ({
  type: SET_VIDEO_GAME_LOADING,
  newLoadingValue,
});

export const saveVideoGameResult = (videoGameResponse) => ({
  type: SAVE_VIDEO_GAME_RESULT,
  videoGameResponse,
});