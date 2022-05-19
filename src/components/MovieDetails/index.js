import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveMovieResults, setMovieLoading } from '../../actions/movieDetails';
import './style.scss';

function MovieDetails() {
  const dispatch = useDispatch();

  const { loading, movieResults } = useSelector((state) => state.movieDetails);
  const { mediaId } = useParams();

  const moviesApiKey = '53d8914dec27b153e9ddc38fedcfb93e';

  const getMovieData = async () => {
    dispatch(setMovieLoading(true));
    try {
      const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${mediaId}?api_key=${moviesApiKey}&language=en-US`);
      const movieCastResponse = await axios.get(`https://api.themoviedb.org/3/movie/${mediaId}/credits?api_key=${moviesApiKey}&language=en-US`);
      
      dispatch(saveMovieResults(movieResponse.data, movieCastResponse.data));
      dispatch(setMovieLoading(false));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (typeof movieResults.movie !== 'undefined' && typeof movieResults.cast !== 'undefined') {
      console.log('movieResult', movieResults);
    }
  }, [movieResults]);

  useEffect(() => {
    return () => {
      getMovieData();
    }
  }, []);



  return (
    <div className="mediaDetails">
    {loading ? (
      <div>Chargement...</div>
    ) : (    
      <div className="mediaContainer">
        <div className="mediaImageContainer">          
          <h1 className="mediaDetails__mediaTitle">{movieResults.movie.original_title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${movieResults.movie.poster_path}`} alt="" />
          <h2 className="mediaDetails__mediaReleaseYear">({movieResults.movie.release_date.substring(0,4)})</h2>
          <h2 className="mediaDetails__mediaRunTime">{movieResults.movie.runtime} minutes</h2>
          <div className='mediaDetails__mediaGenreContainer'>
          {movieResults.movie.genres.map((genre) => (
          <h4 key={genre.id} className="mediaDetails__mediaGenre"> {genre.name} </h4>          
          ))}
          </div>
        </div>
        <div className="mediaTextContainer">                      
          <div className="mediaCrewContainer">
            <h3 className="mediaDetails__mediaCrew">Director{movieResults.cast.crew.filter((crew) => crew.department === "Directing").length > 1 ? 's' : ''}</h3>
            <br />            
              <div className='mediaDetails__mediaCrew'>
                  {movieResults.cast.crew.filter((crew) => crew.department === "Directing").slice(0, 5).map((crew) => (
                    <h4 key={crew.id} className="mediaDetails__mediaCrew">{crew.name}</h4>
                  ))}
           
              </div>              
          </div>
        
          <div className="mediaCastContainer">
            <h3 className="mediaDetails__mediaCast">Main cast</h3>
            <br />
              {movieResults.cast.cast.slice(0, 5).map((cast) => (
              <div key={cast.id}>
                <h4 className="mediaDetails__mediaCast">{cast.name} ({cast.character})</h4>        
                
              </div>
            
          
            ))}
            </div>
          <div className="mediaOverviewContainer">
            
            <h4 className="mediaDetails__mediaOverview">{movieResults.movie.overview}</h4>
           

                            
        </div>

      </div>
    </div>
    )}
  </div>
  );
}

MovieDetails.propTypes = {
  
};

export default MovieDetails;
