import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveSeriesResults, setSeriesLoading } from '../../actions/seriesDetails';
import './style.scss';

function SeriesDetails() {
  const dispatch = useDispatch();

  const { loading, seriesResults } = useSelector((state) => state.seriesDetails);
  const { mediaId } = useParams();

  const seriesApiKey = '53d8914dec27b153e9ddc38fedcfb93e';

  const getSeriesData = async () => {
    dispatch(setSeriesLoading(true));
    try {
      const seriesResponse = await axios.get(`https://api.themoviedb.org/3/tv/${mediaId}?api_key=${seriesApiKey}&language=en-US`);
      const seriesCastResponse = await axios.get(`https://api.themoviedb.org/3/tv/${mediaId}/credits?api_key=${seriesApiKey}&language=en-US`);
      
      dispatch(saveSeriesResults(seriesResponse.data, seriesCastResponse.data));      
      dispatch(setSeriesLoading(false));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (typeof seriesResults.series !== 'undefined' && typeof seriesResults.cast !== 'undefined') {
      console.log('seriesResult', seriesResults);
    }
  }, [seriesResults]);

  useEffect(() => {
    return () => {
      getSeriesData();
    }
  }, []);



  return (
    <div className="mediaDetails">
    {loading ? (
      <div>Chargement...</div>
    ) : (
      <div>
        <img src={`https://image.tmdb.org/t/p/original/${seriesResults.series.poster_path}`} alt="" />
        <h2 className="mediaDetails__mediaAirDate">{seriesResults.series.first_air_date.substring(0,4)}-{seriesResults.series.last_air_date.substring(0,4)} </h2>
        <h2 className="mediaDetails__mediaSeasonCount">Seasons: {seriesResults.series.number_of_seasons}</h2>
        <h2 className="mediaDetails__mediaEpisodeCount">Episodes: {seriesResults.series.number_of_episodes}</h2>
        <h2 className="mediaDetails__mediaEpisodeCount">Runtime: {seriesResults.series.episode_run_time} minutes</h2>  

        <br />
        <br />
        <h3 className="mediaDetails__mediaCast">Director{seriesResults.cast.crew.filter((crew) => crew.known_for_department === "Directing").length > 1 ? 's' : ''}</h3>
        <br />
        {seriesResults.cast.crew.filter((crew) => crew.known_for_department === "Directing").slice(0, 5).map((crew) => (
          <h4 key={crew.id} className="mediaDetails__mediaGenre">{crew.name}</h4>
        ))}

        <br />
        <br />
        <h3 className="mediaDetails__mediaCast">Main cast</h3>
        <br />
        {seriesResults.cast.cast.slice(0, 5).map((cast) => (
          <div key={cast.id}>
            <h4 className="mediaDetails__mediaGenre">{cast.name}</h4>
            <span>{cast.character}</span>
            <br />
            <br />
          </div>
        ))}

        <br />
        <br />
        <h3 className="mediaDetails__mediaOverview">Overview</h3>
        <br />
        <p className="mediaDetails__mediaOverview">{seriesResults.series.overview}</p>

        <br />
        <br />
        <h3 className="mediaDetails__mediaOverview">Genres</h3>
        <br />
        {seriesResults.series.genres.map((genre) => (
          <h4 key={genre.id} className="mediaDetails__mediaGenre">{genre.name}</h4>
        ))}
      </div>
    )}
    </div>
  );
}

SeriesDetails.propTypes = {
  
};

export default SeriesDetails;
