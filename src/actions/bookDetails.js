export const FETCH_BOOKS_DETAILS = 'FETCH_BOOKS_DETAILS';
export const SET_BOOK_LOADING = 'SET_BOOK_LOADING';
export const SAVE_BOOK_RESULT = 'SAVE_BOOK_RESULT';

export const fetchBookDetails = (bookId) => ({
  type: FETCH_BOOKS_DETAILS,
  bookId,
});

export const setBookLoading = (newLoadingValue) => ({
  type: SET_BOOK_LOADING,
  newLoadingValue,
});

export const saveBookResult = (bookResponse) => ({
  type: SAVE_BOOK_RESULT,
  bookResponse,
});