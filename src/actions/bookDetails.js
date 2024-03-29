export const SET_BOOK_LOADING = 'SET_BOOK_LOADING';
export const SAVE_BOOK_RESULT = 'SAVE_BOOK_RESULT';

export const setBookLoading = (newLoadingValue) => ({
  type: SET_BOOK_LOADING,
  newLoadingValue,
});

export const saveBookResult = (bookResponse) => ({
  type: SAVE_BOOK_RESULT,
  bookResponse,
});