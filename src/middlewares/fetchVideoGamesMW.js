import axios from "axios";
import { FETCH_LATEST_VIDEO_GAMES_RELEASE, saveLatestVideoGamesReleaseResult, setLatestVideoGamesReleaseLoading } from "../actions/homePage";
import { FETCH_VIDEO_GAME_DETAILS, saveVideoGameResult, setVideoGameLoading } from "../actions/videoGameDetails";

const instance = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

const videoGamesApiKey = '445da378957044c0ad00ff9fe3f8e708';

const fetchVideoGamesMW = (store) => (next) => async (action) => {
  if (action.type === FETCH_LATEST_VIDEO_GAMES_RELEASE) {
    try {
      // Récupération des dates dynamiques
      const currentNewDate = new Date();
      const currentYear = currentNewDate.getFullYear();
      const currentMonth = (currentNewDate.getMonth() + 1).toString().length < 2 ? `0${currentNewDate.getMonth() + 1}` : (currentNewDate.getMonth() + 1);
      const currentDay = (currentNewDate.getDate()).toString().length < 2 ? `0${currentNewDate.getDate()}` : currentNewDate.getDate();
    
      const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
      const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
      // ----------------------

      const response = await instance.get(`/games?key=${videoGamesApiKey}&dates=${lastYear},${currentDate}`);
      store.dispatch(saveLatestVideoGamesReleaseResult(response.data));
      setTimeout(() => {
        store.dispatch(setLatestVideoGamesReleaseLoading(false));
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }
  else if (action.type === FETCH_VIDEO_GAME_DETAILS) {
    store.dispatch(setVideoGameLoading(true));
    try {
      const videoGameResponse = await instance.get(`/games/${action.videoGameId}?key=${videoGamesApiKey}`);
      
      store.dispatch(saveVideoGameResult(videoGameResponse.data));
      setTimeout(() => {
        store.dispatch(setVideoGameLoading(false));        
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
  next(action);
}

export default fetchVideoGamesMW;