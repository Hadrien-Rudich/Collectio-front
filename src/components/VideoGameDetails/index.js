import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoGameDetails } from '../../actions/videoGameDetails';
import Loader from '../Loader';
import './style.scss';

function VideoGameDetails() {
  const dispatch = useDispatch();

  const { loading, videoGameResult } = useSelector((state) => state.videoGameDetails);
  const { mediaId } = useParams();

  // useEffect(() => {
  //   if (typeof videoGameResult !== 'undefined') {
  //     console.log('videoGameResult', videoGameResult);
  //   }
  // }, [videoGameResult]);

  useEffect(() => {
    dispatch(fetchVideoGameDetails(mediaId));
  }, []);



  return (
    <div className="mediaDetails">
    {loading ? (
      <Loader />
    ) : (
      <div className="mediaContainer">
        <div className="mediaImageContainer">  
            <h1 className="mediaDetails__mediaTitle">{videoGameResult.name_original}</h1>
            <img src={videoGameResult.background_image} alt="" />
            <h2 className="mediaDetails__mediaReleaseYear">({videoGameResult.released.substring(0,4)})</h2>
            <div className='mediaDetails__mediaGenreContainer'>
            {videoGameResult.genres.map((genre) => (
              <h4 className="mediaDetails__mediaGenre" key={genre.id}>{genre.name}</h4>
              ))}            
             </div>

             <div className="mediaCastContainer">       

                <h4 className="mediaDetails__mediaCast"></h4>        
            
                {videoGameResult.publishers.map((publisher) => (
                  <p key={publisher.id}>{publisher.name}</p>
                  ))}
              </div>
            {/* <h3>Playtime: {videoGameResult.playtime} hours</h3> */}

          </div>       
          <div className="mediaTextContainer">   
            

            <div className="mediaOverviewContainer">

              <h4 className="mediaDetails__mediaOverview">{videoGameResult.description_raw}</h4>           
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
