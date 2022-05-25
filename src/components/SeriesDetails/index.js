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
        <div className="mediaRatingContainer">
        <div className="collectioRatingContainer">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>

          </div> 
          <div className="userRatingContainer">
            <span className="fa fa-star"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>

          </div> 


        <div className="mediaImageContainer"> 
          <h1 className="mediaDetails__mediaTitle">{seriesDetailsResults.seriesDetailsResult.original_name}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${seriesDetailsResults.seriesDetailsResult.poster_path}`} alt="" />
          <h4 className="mediaDetails__mediaAirDate">{seriesDetailsResults.seriesDetailsResult.first_air_date.substring(0,4)}-{seriesDetailsResults.seriesDetailsResult.last_air_date.substring(0,4)} </h4>
          <h4 className="mediaDetails__mediaSeasonsAndEpisodes">{seriesDetailsResults.seriesDetailsResult.number_of_seasons} seasons - {seriesDetailsResults.seriesDetailsResult.number_of_episodes} episodes ({seriesDetailsResults.seriesDetailsResult.episode_run_time} minutes)</h4>                    
          <div className='mediaDetails__mediaGenreContainer'>
                {seriesDetailsResults.seriesDetailsResult.genres.map((genre) => (
                <h4 key={genre.id} className="mediaDetails__mediaGenre">{genre.name}</h4>
              ))}
          </div>
        </div>
        
        <div className="mediaTextContainer">

          
        <div className="mediaUserReview">
   
   <button type="button" className="button -review">
 <span className="button__text">Rating</span>              
 <span className="button__icon">
 <ion-icon name="star"></ion-icon>
 </span>
 </button>     

 <button type="button" className="button -review">
 <span className="button__text">Review</span>              
 <span className="button__icon">
 <ion-icon name="reader"></ion-icon>
 <ion-icon name="pencil"></ion-icon>        
 </span>
 </button>   
 </div>
        <div className="mediaUserListContainer">
            <button type="button" className="button">
              <span className="button__text">Wishlist</span>
              <span className="button__icon">
              <ion-icon name="bookmark"></ion-icon>
              </span>
              </button>
              <button type="button" className="button">
              <span className="button__text">Favorites</span>
              <span className="button__icon">
                <ion-icon name="heart"></ion-icon></span>
              </button>         

              <button type="button" className="button">
              <span className="button__text">In Library</span>              
              <span className="button__icon">
              <ion-icon name="checkmark"></ion-icon> 
              </span>
              </button>

              <button type="button" className="button">
              <span className="button__text">In Progress</span>              
              <span className="button__icon">
              <ion-icon name="eye"></ion-icon>
              </span>
              </button>          
                   
          </div>
          
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
