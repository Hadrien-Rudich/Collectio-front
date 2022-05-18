import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveVideoGameResult, setVideoGameLoading } from '../../actions/videoGameDetails';
import './style.scss';

function VideoGameDetails() {
  const dispatch = useDispatch();

  const { loading, videoGameResult } = useSelector((state) => state.videoGameDetails);
  const { mediaId } = useParams();

  const videoGameApiKey = '445da378957044c0ad00ff9fe3f8e708';

  const getVideoGameData = async () => {
    dispatch(setVideoGameLoading(true));
    try {
      const videoGameResponse = await axios.get(`https://api.rawg.io/api/games/${mediaId}?key=${videoGameApiKey}`);
      
      dispatch(saveVideoGameResult(videoGameResponse.data));
      dispatch(setVideoGameLoading(false));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (typeof videoGameResult !== 'undefined') {
      console.log('videoGameResult', videoGameResult);
    }
  }, [videoGameResult]);

  useEffect(() => {
    return () => {
      getVideoGameData();
    }
  }, []);



  return (
    <div className="mediaDetails">
    {loading ? (
      <div>Chargement...</div>
    ) : (
      <div>
        <img src={videoGameResult.background_image} alt="" />
        <h2 className="mediaDetails__mediaTitle">{videoGameResult.name_original}</h2>
        <h2>Release : {videoGameResult.released}</h2>


        <br />
        <br />
        <h3 className="mediaDetails__mediaCast">Description</h3>
        <br />
        <p>{videoGameResult.description_raw}</p>

        <br />
        <br />
        <h3 className="mediaDetails__mediaCast">Genres</h3>
        <br />
        {videoGameResult.genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}

        <br />
        <h3>Playtime: {videoGameResult.playtime} hours</h3>

        <br />
        <br />
        <h3 className="mediaDetails__mediaCast">Publisher{videoGameResult.publishers.length > 1 ? 's' : ''}</h3>
        <br />
        {videoGameResult.publishers.map((publisher) => (
          <p key={publisher.id}>{publisher.name}</p>
        ))}
      </div>
    )}
    </div>
  );
}

VideoGameDetails.propTypes = {
  
};

export default VideoGameDetails;
