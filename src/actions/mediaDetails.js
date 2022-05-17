export const TOGGLE_LOADING_MEDIA = 'TOGGLE_LOADING_MEDIA';
export const SAVE_MOVIE_RESULT = 'SAVE_MOVIE_RESULT';

export const toggleLoadingMedia = () => ({
  type: TOGGLE_LOADING_MEDIA,
});

export const saveMovieResult = (responseMovie) => ({
  type: SAVE_MOVIE_RESULT,
  responseMovie,
});