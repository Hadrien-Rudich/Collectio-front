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

export default VideoGameDetails;
