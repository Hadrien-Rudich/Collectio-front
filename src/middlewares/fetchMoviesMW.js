import axios from "axios";
import { FETCH_LATEST_MOVIES_RELEASE, saveLatestMoviesReleaseResult, setLatestMoviesReleaseLoading } from "../actions/homePage";
import { FETCH_MOVIE_DETAILS, saveMovieResults, setMovieLoading } from "../actions/movieDetails";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
});

const moviesApiKey = '53d8914dec27b153e9ddc38fedcfb93e';

const fetchMoviesMW = (store) => (next) => async (action) => {
  if (action.type === FETCH_LATEST_MOVIES_RELEASE) {
    try {
        const latestMoviesReleaseResponse = await instance.get(`/now_playing?api_key=${moviesApiKey}&language=en-US`);
        store.dispatch(saveLatestMoviesReleaseResult(latestMoviesReleaseResponse.data));
        setTimeout(() => {
          store.dispatch(setLatestMoviesReleaseLoading(false));
        }, 500);
    } catch (error) {
        console.log(error);
    }
  }
  else if (action.type === FETCH_MOVIE_DETAILS) {
    store.dispatch(setMovieLoading(true));
    try {
      const movieResponse = await instance.get(`/${action.movieId}?api_key=${moviesApiKey}&language=en-US`);
      const movieCastResponse = await instance.get(`/${action.movieId}/credits?api_key=${moviesApiKey}&language=en-US`);
      
      store.dispatch(saveMovieResults(movieResponse.data, movieCastResponse.data));
      setTimeout(() => {
        store.dispatch(setMovieLoading(false));
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
  next(action);
}

export default fetchMoviesMW;