import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSeriesDetailsById } from '../../actions/seriesDetails';
import Loader from '../Loader';
import './style.scss';

function SeriesDetails() {
  const dispatch = useDispatch();

  const { seriesDetailsLoading, seriesDetailsResults } = useSelector((state) => state.seriesDetails);
  const seriesId = useParams().mediaId;

  useEffect(() => {
    dispatch(fetchSeriesDetailsById(seriesId));
  }, []);

  // /**
  //  * ! show seriesDetailsResults in console
  //  */
  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   }
  //   else {
  //     console.log('seriesDetailsResults', seriesDetailsResults);
  //   }
  // }, [seriesDetailsResults]);

  return (
    <div className="mediaDetails">
    {seriesDetailsLoading ? (
      <Loader />
    ) : (
      <div className='mediaContainer'>
        <div className="mediaImageContainer"> 
          <h1 className="mediaDetails__mediaTitle">{seriesDetailsResults.seriesDetailsResult.original_name}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${seriesDetailsResults.seriesDetailsResult.poster_path}`} alt="" />
          <h2 className="mediaDetails__mediaAirDate">{seriesDetailsResults.seriesDetailsResult.first_air_date.substring(0,4)}-{seriesDetailsResults.seriesDetailsResult.last_air_date.substring(0,4)} </h2>
          <h2 className="mediaDetails__mediaSeasonCount">{seriesDetailsResults.seriesDetailsResult.number_of_seasons} seasons </h2>
          <h2 className="mediaDetails__mediaEpisodeCount">{seriesDetailsResults.seriesDetailsResult.number_of_episodes} episodes</h2>
          <h2 className="mediaDetails__mediaEpisodeCount"> {seriesDetailsResults.seriesDetailsResult.episode_run_time} minutes</h2>  
          <div className='mediaDetails__mediaGenreContainer'>
                {seriesDetailsResults.seriesDetailsResult.genres.map((genre) => (
                <h4 key={genre.id} className="mediaDetails__mediaGenre">{genre.name}</h4>
              ))}
          </div>
        </div>
        
        <div className="mediaTextContainer">
          <div className="mediaCrewContainer">   
          <h3 className="mediaDetails__mediaCast">Director{seriesDetailsResults.seriesDetailsCastResult.crew.filter((crew) => crew.known_for_department === "Directing").length > 1 ? 's' : ''}</h3>
          <br />
            <div className='mediaDetails__mediaCrew'> 
            {seriesDetailsResults.seriesDetailsCastResult.crew.filter((crew) => crew.known_for_department === "Directing").slice(0, 5).map((crew) => (
              <h4 key={crew.id} className="mediaDetails__mediaCrew">{crew.name}</h4>
            ))}
              </div> 
        </div>

        <div className="mediaCastContainer">
        <h3 className="mediaDetails__mediaCast">Main cast</h3>
        <br />
        {seriesDetailsResults.seriesDetailsCastResult.cast.slice(0, 5).map((cast) => (
          <div key={cast.id}>
            <h4 className="mediaDetails__mediaCast">{cast.name} ({cast.character})</h4>
                      
          </div>

        ))}
        </div>

        <div className="mediaOverviewContainer">
        <h4 className="mediaDetails__mediaOverview">{seriesDetailsResults.seriesDetailsResult.overview}</h4>

        </div>           
       
      </div>
      </div>
    )}
    </div>
  );
}

export default SeriesDetails;
