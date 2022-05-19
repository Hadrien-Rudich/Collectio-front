import axios from "axios";
import { FETCH_LATEST_SERIES_RELEASE, saveLatestSeriesReleaseResult, setLatestSeriesReleaseLoading } from "../actions/homePage";
import { FETCH_SERIES_DETAILS, saveSeriesResults, setSeriesLoading } from "../actions/seriesDetails";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv',
});

const seriesApiKey = '53d8914dec27b153e9ddc38fedcfb93e';

const fetchSeriesMW = (store) => (next) => async (action) => {
  if (action.type === FETCH_LATEST_SERIES_RELEASE) {
    try {
      const response = await instance.get(`/on_the_air?api_key=${seriesApiKey}&language=en-US`);
      store.dispatch(saveLatestSeriesReleaseResult(response.data));
      setTimeout(() => {
        store.dispatch(setLatestSeriesReleaseLoading(false));
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }
  else if (action.type === FETCH_SERIES_DETAILS) {
    store.dispatch(setSeriesLoading(true));
    try {
      const seriesResponse = await instance.get(`/${action.seriesId}?api_key=${seriesApiKey}&language=en-US`);
      const seriesCastResponse = await instance.get(`/${action.seriesId}/credits?api_key=${seriesApiKey}&language=en-US`);
      
      store.dispatch(saveSeriesResults(seriesResponse.data, seriesCastResponse.data));
      setTimeout(() => {
        store.dispatch(setSeriesLoading(false));        
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
  next(action);
}

export default fetchSeriesMW;