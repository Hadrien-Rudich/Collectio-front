import { SAVE_BOOK_RESULT, SET_BOOK_LOADING } from "../actions/bookDetails";

const initialState = {
  loading: true,
  bookResult: undefined,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BOOK_RESULT: {
      return {
        ...state,
        bookResult: action.bookResponse,
      }
    }
    case SET_BOOK_LOADING: {
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