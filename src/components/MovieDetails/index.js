import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from '../../actions/movieDetails';
import Loader from '../Loader';
import './style.scss';

function MovieDetails() {
  const dispatch = useDispatch();

  const { movieDetailsLoading, movieDetailsResults } = useSelector((state) => state.movieDetails);
  const movieId = useParams().mediaId;

  useEffect(() => {    
    dispatch(fetchMovieDetailsById(movieId));
  }, []);

  // /**
  //  * ! show movieDetailsResults in console
  //  */
  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   }
  //   else {
  //     console.log('movieDetailsResults', movieDetailsResults);
  //   }
  // }, [movieDetailsResults]);

  return (
    <div className="mediaDetails">
    {movieDetailsLoading ? (
      <Loader />
    ) : (    
      <div className="mediaContainer">
        <div className="mediaImageContainer">          
          <h1 className="mediaDetails__mediaTitle">{movieDetailsResults.movieDetailsResult.original_title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${movieDetailsResults.movieDetailsResult.poster_path}`} alt="" />
          <h2 className="mediaDetails__mediaReleaseYear">({movieDetailsResults.movieDetailsResult.release_date.substring(0,4)})</h2>
          <h2 className="mediaDetails__mediaRunTime">{movieDetailsResults.movieDetailsResult.runtime} minutes</h2>
          <div className='mediaDetails__mediaGenreContainer'>
          {movieDetailsResults.movieDetailsResult.genres.map((genre) => (
          <h4 key={genre.id} className="mediaDetails__mediaGenre"> {genre.name} </h4>          
          ))}
          </div>
        </div>
        <div className="mediaTextContainer">                      
          <div className="mediaCrewContainer">
            <h3 className="mediaDetails__mediaCrew">Director{movieDetailsResults.movieDetailsCastResult.crew.filter((crew) => crew.department === "Directing").length > 1 ? 's' : ''}</h3>
            <br />            
              <div className='mediaDetails__mediaCrew'>
                  {movieDetailsResults.movieDetailsCastResult.crew.filter((crew) => crew.department === "Directing").slice(0, 5).map((crew) => (
                    <h4 key={crew.id} className="mediaDetails__mediaCrew">{crew.name}</h4>
                  ))}
           
              </div>              
          </div>
        
          <div className="mediaCastContainer">
            <h3 className="mediaDetails__mediaCast">Main cast</h3>
            <br />
              {movieDetailsResults.movieDetailsCastResult.cast.slice(0, 5).map((cast) => (
              <div key={cast.id}>
                <h4 className="mediaDetails__mediaCast">{cast.name} ({cast.character})</h4>        
                
              </div>
            
          
            ))}
            </div>
          <div className="mediaOverviewContainer">
            
            <h4 className="mediaDetails__mediaOverview">{movieDetailsResults.movieDetailsResult.overview}</h4>
           

                            
        </div>

      </div>
    </div>
    )}
  </div>
  );
}

export default MovieDetails;
