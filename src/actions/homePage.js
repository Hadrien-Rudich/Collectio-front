// set Release Loading
export const SET_LATEST_MOVIES_RELEASE_LOADING = 'SET_LATEST_MOVIES_RELEASE_LOADING';
export const SET_LATEST_SERIES_RELEASE_LOADING = 'SET_LATEST_SERIES_RELEASE_LOADING';
export const SET_LATEST_BOOKS_RELEASE_LOADING = 'SET_LATEST_BOOKS_RELEASE_LOADING';
export const SET_LATEST_VIDEO_GAMES_RELEASE_LOADING = 'SET_LATEST_VIDEO_GAMES_RELEASE_LOADING';

export const setLatestMoviesReleaseLoading = (newLatestMoviesReleaseLoading) => ({
  type: SET_LATEST_MOVIES_RELEASE_LOADING,
  newLatestMoviesReleaseLoading,
});

export const setLatestSeriesReleaseLoading = (newLatestSeriesReleaseLoading) => ({
  type: SET_LATEST_SERIES_RELEASE_LOADING,
  newLatestSeriesReleaseLoading,
});

export const setLatestBooksReleaseLoading = (newLatestBooksReleaseLoading) => ({
  type: SET_LATEST_BOOKS_RELEASE_LOADING,
  newLatestBooksReleaseLoading,
});

export const setLatestVideoGamesReleaseLoading = (newLatestVideoGamesReleaseLoading) => ({
  type: SET_LATEST_VIDEO_GAMES_RELEASE_LOADING,
  newLatestVideoGamesReleaseLoading,
});
// ------------------------------

// fetch Release
export const FETCH_LATEST_MOVIES_RELEASE = 'FETCH_LATEST_MOVIES_RELEASE';
export const FETCH_LATEST_SERIES_RELEASE = 'FETCH_LATEST_SERIES_RELEASE';
export const FETCH_LATEST_BOOKS_RELEASE = 'FETCH_LATEST_BOOKS_RELEASE';
export const FETCH_LATEST_VIDEO_GAMES_RELEASE = 'FETCH_LATEST_VIDEO_GAMES_RELEASE';

export const fetchLatestMoviesRelease = () => ({
  type: FETCH_LATEST_MOVIES_RELEASE,
});

export const fetchLatestSeriesRelease = () => ({
  type: FETCH_LATEST_SERIES_RELEASE,
});

export const fetchLatestBooksRelease = () => ({
  type: FETCH_LATEST_BOOKS_RELEASE,
});

export const fetchLatestVideoGamesRelease = () => ({
  type: FETCH_LATEST_VIDEO_GAMES_RELEASE,
});
// ------------------------------

// save Release
export const SAVE_LATEST_MOVIES_RELEASE_RESULT = 'SAVE_LATEST_MOVIES_RELEASE_RESULT';
export const SAVE_LATEST_SERIES_RELEASE_RESULT = 'SAVE_LATEST_SERIES_RELEASE_RESULT';
export const SAVE_LATEST_BOOKS_RELEASE_RESULT = 'SAVE_LATEST_BOOKS_RELEASE_RESULT';
export const SAVE_LATEST_VIDEO_GAMES_RELEASE_RESULT = 'SAVE_LATEST_VIDEO_GAMES_RELEASE_RESULT';

export const saveLatestMoviesReleaseResult = (newLatestMoviesReleaseResult) => ({
  type: SAVE_LATEST_MOVIES_RELEASE_RESULT,
  newLatestMoviesReleaseResult,
});

export const saveLatestSeriesReleaseResult = (newLatestSeriesReleaseResult) => ({
  type: SAVE_LATEST_SERIES_RELEASE_RESULT,
  newLatestSeriesReleaseResult,
});

export const saveLatestBooksReleaseResult = (newLatestBooksReleaseResult) => ({
  type: SAVE_LATEST_BOOKS_RELEASE_RESULT,
  newLatestBooksReleaseResult,
});

export const saveLatestVideoGamesReleaseResult = (newLatestVideoGamesReleaseResult) => ({
  type: SAVE_LATEST_VIDEO_GAMES_RELEASE_RESULT,
  newLatestVideoGamesReleaseResult,
});
// ------------------------------


// save Glide
export const SAVE_LATEST_MOVIES_RELEASE_GLIDE = 'SAVE_LATEST_MOVIES_RELEASE_GLIDE';
export const SAVE_LATEST_SERIES_RELEASE_GLIDE = 'SAVE_LATEST_SERIES_RELEASE_GLIDE';
export const SAVE_LATEST_BOOKS_RELEASE_GLIDE = 'SAVE_LATEST_BOOKS_RELEASE_GLIDE';
export const SAVE_LATEST_VIDEO_GAMES_GLIDE = 'SAVE_LATEST_VIDEO_GAMES_GLIDE';

export const saveLatestMoviesReleaseGlide = (newLatestMoviesReleaseGlide) => ({
  type: SAVE_LATEST_MOVIES_RELEASE_GLIDE,
  newLatestMoviesReleaseGlide,
});

export const saveLatestSeriesReleaseGlide = (newLatestSeriesReleaseGlide) => ({
  type: SAVE_LATEST_SERIES_RELEASE_GLIDE,
  newLatestSeriesReleaseGlide,
});

export const saveLatestBooksReleaseGlide = (newLatestBooksReleaseGlide) => ({
  type: SAVE_LATEST_BOOKS_RELEASE_GLIDE,
  newLatestBooksReleaseGlide,
});

export const saveLatestVideoGamesReleaseGlide = (newLatestVideoGamesReleaseGlide) => ({
  type: SAVE_LATEST_VIDEO_GAMES_GLIDE,
  newLatestVideoGamesReleaseGlide,
});
// ------------------------------