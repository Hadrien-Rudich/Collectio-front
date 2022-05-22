import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoGameDetailsById } from '../../actions/videoGameDetails';
import Loader from '../Loader';
import './style.scss';

function VideoGameDetails() {
  const dispatch = useDispatch();

  const { videoGameDetailsLoading, videoGameDetailsResult } = useSelector((state) => state.videoGameDetails);
  const videoGameId = useParams().mediaId;

  useEffect(() => {
    dispatch(fetchVideoGameDetailsById(videoGameId));
  }, []);

  // /**
  //  * ! show videoGameDetailsResult in console
  //  */
  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   }
  //   else {
  //     console.log('videoGameDetailsResult', videoGameDetailsResult);
  //   }
  // }, [videoGameDetailsResult]);

  return (
    <div className="mediaDetails">
    {videoGameDetailsLoading ? (
      <Loader />
    ) : (
      <div className="mediaContainer">
        <div className="mediaRatingContainer">
        <div className="collectioRatingContainer">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>

          </div> 
          <div className="userRatingContainer">
            <span class="fa fa-star"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>

          </div> 
        
        <div className="mediaImageContainer">  
            <h1 className="mediaDetails__mediaTitle">{videoGameDetailsResult.name_original}</h1>
            <img src={videoGameDetailsResult.background_image} alt="" />
            <h2 className="mediaDetails__mediaReleaseYear">({videoGameDetailsResult.released.substring(0,4)})</h2>
            <div className='mediaDetails__mediaGenreContainer'>
            {videoGameDetailsResult.genres.map((genre) => (
              <h4 className="mediaDetails__mediaGenre" key={genre.id}>{genre.name}</h4>
              ))}            
             </div>

             <div className="mediaCastContainer">       

                <h4 className="mediaDetails__mediaCast"></h4>        
            
                {videoGameDetailsResult.publishers.map((publisher) => (
                  <p key={publisher.id}>{publisher.name}</p>
                  ))}
              </div>
            {/* <h3>Playtime: {videoGameDetailsResult.playtime} hours</h3> */}

          </div>       
          <div className="mediaTextContainer">   
          <div className="mediaUserReview">
   
            <button type="button" class="button -review">
          <span class="button__text">Rating</span>              
          <span class="button__icon">
          <ion-icon name="star"></ion-icon>
          </span>
          </button>     

          <button type="button" class="button -review">
          <span class="button__text">Review</span>              
          <span class="button__icon">
          <ion-icon name="reader"></ion-icon>
          <ion-icon name="pencil"></ion-icon>        
          </span>
          </button>   
          </div>

          <div className="mediaUserListContainer">
            <button type="button" class="button">
              <span class="button__text">Wishlist</span>
              <span class="button__icon">
              <ion-icon name="bookmark"></ion-icon>
              </span>
              </button>
              <button type="button" class="button">
              <span class="button__text">Favorites</span>
              <span class="button__icon">
                <ion-icon name="heart"></ion-icon></span>
              </button>         

              <button type="button" class="button">
              <span class="button__text">In Library</span>              
              <span class="button__icon">
              <ion-icon name="checkmark"></ion-icon> 
              </span>
              </button>

              <button type="button" class="button">
              <span class="button__text">In Progress</span>              
              <span class="button__icon">
              <ion-icon name="eye"></ion-icon>
              </span>
              </button>          
                   
          </div>
            

            <div className="mediaOverviewContainer">

              <h4 className="mediaDetails__mediaOverview">{videoGameDetailsResult.description_raw}</h4>           
              </div>

        </div>

          {/* <br />
          <br />
          <h3 className="mediaDetails__mediaCast">Director{videoGameResult.cast.crew.filter((crew) => crew.department === "Directing").length > 1 ? 's' : ''}</h3>
          <br />
          {videoGameResult.cast.crew.filter((crew) => crew.department === "Directing").slice(0, 5).map((crew) => (
            <h4 key={crew.id} className="mediaDetails__mediaGenre">{crew.name}</h4>
          ))}

          <br />
          <br />
          <h3 className="mediaDetails__mediaCast">Main cast</h3>
          <br />
          {videoGameResult.cast.cast.slice(0, 5).map((cast) => (
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
          <p className="mediaDetails__mediaOverview">{videoGameResult.movie.overview}</p>

          <br />
          <br />
          <h3 className="mediaDetails__mediaOverview">Genres</h3>
          <br />
          {videoGameResult.movie.genres.map((genre) => (
            <h4 key={genre.id} className="mediaDetails__mediaGenre">{genre.name}</h4>
          ))} */}
      </div>
    )}
    </div>
  );
}

export default VideoGameDetails;
