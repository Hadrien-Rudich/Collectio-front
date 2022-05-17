import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMovieResult, toggleLoadingMedia } from '../../actions/mediaDetails';
import './style.scss';

function MediaDetails() {
  const dispatch = useDispatch();

  const { loading, movieResult } = useSelector((state) => state.mediaDetails);

  const moviesApiKey = '53d8914dec27b153e9ddc38fedcfb93e';
  const movieId = '675353';
  let movieCast;

  const getMoviesId = async () => {    
    try {
      const details = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${moviesApiKey}&language=en-US`);
      dispatch(saveMovieResult(details.data));

      const cast = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${moviesApiKey}&language=en-US`);


      console.log(cast.data);
      movieCast = cast.data;

      dispatch(toggleLoadingMedia());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log({loading});
  }, [loading])

  useEffect(() => {
    return () => {
      getMoviesId();
    }
  }, []);


  return (
    <div className="mediaDetails">
    {loading ? (
      <div>Chargement...</div>
    ) : (
      <div>
        <img src="https://fr.web.img5.acsta.net/medias/nmedia/18/91/08/37/20508296.jpg" alt="" />
        <h2 className="mediaDetails__mediaTitle">{movieResult.original_title}</h2>
        {/* <h3 className="mediaDetails__mediaDirector">{movieCast.crew['Director']}</h3> */}
        <div>
        
        </div>
      </div>
    )}
    </div>
  );
}

MediaDetails.propTypes = {
  
};

export default MediaDetails;
