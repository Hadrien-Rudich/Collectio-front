export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';
export const SET_MOVIE_LOADING = 'SET_MOVIE_LOADING';
export const SAVE_MOVIE_RESULTS = 'SAVE_MOVIE_RESULTS';

export const fetchMovieDetails = (movieId) => ({
  type: FETCH_MOVIE_DETAILS,
  movieId,
});


export const setMovieLoading = (newLoadingValue) => ({
  type: SET_MOVIE_LOADING,
  newLoadingValue,
});

export const saveMovieResults = (movieResponse, movieCastResponse) => ({
  type: SAVE_MOVIE_RESULTS,
  movieResponse,
  movieCastResponse,
});