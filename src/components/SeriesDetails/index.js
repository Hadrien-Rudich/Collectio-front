import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSeriesDetails, saveSeriesResults, setSeriesLoading } from '../../actions/seriesDetails';
import Loader from '../Loader';
import './style.scss';

function SeriesDetails() {
  const dispatch = useDispatch();

  const { loading, seriesResults } = useSelector((state) => state.seriesDetails);
  const { mediaId } = useParams();

  // useEffect(() => {
  //   if (typeof seriesResults.series !== 'undefined' && typeof seriesResults.cast !== 'undefined') {
  //     console.log('seriesResult', seriesResults);
  //   }
  // }, [seriesResults]);

  useEffect(() => {
    dispatch(fetchSeriesDetails(mediaId));
  }, []);



  return (
    <div className="mediaDetails">
    {loading ? (
      <Loader />
    ) : (
      <div className='mediaContainer'>
        <div className="mediaImageContainer"> 
          <h1 className="mediaDetails__mediaTitle">{seriesResults.series.original_name}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${seriesResults.series.poster_path}`} alt="" />
          <h2 className="mediaDetails__mediaAirDate">{seriesResults.series.first_air_date.substring(0,4)}-{seriesResults.series.last_air_date.substring(0,4)} </h2>
          <h2 className="mediaDetails__mediaSeasonCount">{seriesResults.series.number_of_seasons} seasons </h2>
          <h2 className="mediaDetails__mediaEpisodeCount">{seriesResults.series.number_of_episodes} episodes</h2>
          <h2 className="mediaDetails__mediaEpisodeCount"> {seriesResults.series.episode_run_time} minutes</h2>  
          <div className='mediaDetails__mediaGenreContainer'>
                {seriesResults.series.genres.map((genre) => (
                <h4 key={genre.id} className="mediaDetails__mediaGenre">{genre.name}</h4>
              ))}
          </div>
        </div>
        
        <div className="mediaTextContainer">
          <div className="mediaCrewContainer">   
          <h3 className="mediaDetails__mediaCast">Director{seriesResults.cast.crew.filter((crew) => crew.known_for_department === "Directing").length > 1 ? 's' : ''}</h3>
          <br />
            <div className='mediaDetails__mediaCrew'> 
            {seriesResults.cast.crew.filter((crew) => crew.known_for_department === "Directing").slice(0, 5).map((crew) => (
              <h4 key={crew.id} className="mediaDetails__mediaCrew">{crew.name}</h4>
            ))}
              </div> 
        </div>

        <div className="mediaCastContainer">
        <h3 className="mediaDetails__mediaCast">Main cast</h3>
        <br />
        {seriesResults.cast.cast.slice(0, 5).map((cast) => (
          <div key={cast.id}>
            <h4 className="mediaDetails__mediaCast">{cast.name} ({cast.character})</h4>
                      
          </div>

        ))}
        </div>

        <div className="mediaOverviewContainer">
        <h4 className="mediaDetails__mediaOverview">{seriesResults.series.overview}</h4>

        </div>           
       
      </div>
      </div>
    )}
    </div>
  );
}

SeriesDetails.propTypes = {
  
};

export default SeriesDetails;
