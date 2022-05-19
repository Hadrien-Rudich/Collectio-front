import axios from "axios";
import { FETCH_BOOKS_DETAILS, saveBookResult, setBookLoading } from "../actions/bookDetails";
import { FETCH_LATEST_BOOKS_RELEASE, saveLatestBooksReleaseResult, setLatestBooksReleaseLoading } from "../actions/homePage";

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

const booksApiKey = 'AIzaSyCvJHe09_0657sl8Gop_SsmJ6rMd7Cmov8';

const fetchBooksMW = (store) => (next) => async (action) => {
  if (action.type === FETCH_LATEST_BOOKS_RELEASE) {
    try {
      const response = await instance.get(`/volumes?q=inauthor:james%20ellroy&key=${booksApiKey}&projection=full&langRestrict=en`);
      store.dispatch(saveLatestBooksReleaseResult(response.data));
      setTimeout(() => {
        store.dispatch(setLatestBooksReleaseLoading(false));
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  }
  else if (action.type === FETCH_BOOKS_DETAILS) {
    store.dispatch(setBookLoading(true));
    try {
      const bookResponse = await instance.get(`/volumes/${action.bookId}`);
      
      store.dispatch(saveBookResult(bookResponse.data));
      setTimeout(() => {
        store.dispatch(setBookLoading(false));        
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
  next(action);
}

export default fetchBooksMW;