import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../actions/movieDetails';
import Loader from '../Loader';
import './style.scss';


// TO DO:
// - Afficher la note Moyenne
// - Créer input pour modifier son commentaire
// - Créer un Update pour la note de la review
// - Dupliquer sur Book, Series...


// NOTE MOYENNE
// Afficher la note moyenne pour une review, si le USER est CONNECTÉ: response.data.avg_rating[0].note_moyenne
// si le user n'est pas CONNECTÉ: response.data.note_moyenne


function MovieDetails() {

  const token = localStorage.getItem('token');
  const [results, setResults] = useState('');
  const [inLibrary, setInLibrary] = useState(false);
  const [reviewDetails, setReviewDetails] = useState({});
  let baseURL = "https://image.tmdb.org/t/p/original";
  console.log(token)


  const dispatch = useDispatch();

  const { loading, movieResults } = useSelector((state) => state.movieDetails);
  const { mediaId } = useParams();
  console.log(`urlID is: ${mediaId}`)


  const fetchReviewDetails = async () => {
    try {
      const response = await axios.get(`https://collectio-app.herokuapp.com/api/movie/${mediaId}`, {
        headers: {
          "authorization": token
        }
       });
       console.log(response.data.length)
      if (response.data.length > 0) {
        setInLibrary(true)
        setReviewDetails(response.data[0])
      };
    } catch (error) {
      console.log(error)
    }
  };




   useEffect(() => {
     fetchReviewDetails();
     dispatch(fetchMovieDetails(mediaId));
   }, []);
   
  useEffect(() => {
    if (typeof movieResults.movie !== 'undefined' && typeof movieResults.cast !== 'undefined') {
      console.log('movieResult', movieResults);
    }
  }, [movieResults]);



  console.log(reviewDetails);

  async function PostReview(list, title, coverURL) {
    console.log('post')
      try {
        console.log(list)
        console.log(title)
        const response = await axios.post(`https://collectio-app.herokuapp.com/api/movie/${mediaId}`, {
           "list": list,
           "title": title,
           "coverURL": coverURL
         }, {
          headers: {
            "authorization": token
          },
        })
        console.log(response);
        //setResults(response.data[0].note_moyenne)
        //console.log(results);
      } catch (error) {
        console.log(error)
      }

  }

  


  async function PatchReview(list) {

    console.log('patch')
     try {

       const response = await axios.patch(`https://collectio-app.herokuapp.com/api/movie/${mediaId}`, {
          "list": list
        }, {
         headers: {
           "authorization": token
         },
       })
       console.log(response);
       //setResults(response.data[0].note_moyenne)
       //console.log(results);
     } catch (error) {
       console.log(error)
     }


  }


  // A DÉVELOPPER
  /*
  async function PatchReviewComment(comment) {
  }

  async function PatchReviewNote(note) {
    try {
    const response = await axios.patch(`https://collectio-app.herokuapp.com/api/movie/${mediaId}`, { 
          "note": note
        }, {
         headers: {
           "authorization": token
         },
       })
      } catch (error) {
        console.log(error)
      }
    }
    */




  return (
    <div className="mediaDetails">
    {loading ? (
      <div>Chargement...</div>
    ) : (
      <div className="mediaContainer">
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
          <h1 className="mediaDetails__mediaTitle">{movieResults.movie.original_title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${movieResults.movie.poster_path}`} alt="" />
          <h4 className="mediaDetails__mediaReleaseYear">({movieResults.movie.release_date.substring(0,4)})</h4>
          <h4 className="mediaDetails__mediaRunTime">{movieResults.movie.runtime} minutes</h4>
          <div className='mediaDetails__mediaGenreContainer'>
          {movieResults.movie.genres.map((genre) => (
          <h4 key={genre.id} className="mediaDetails__mediaGenre"> {genre.name} </h4>
          ))}
          </div>
        </div>
        <div className="mediaTextContainer">
          <div className="mediaUserListContainer">


          <div>
            { inLibrary &&  <div><p>{reviewDetails.note}</p><p>{reviewDetails.comment}</p></div>}
          </div>


           { inLibrary?
              <button type="button" className="button" value='wishlist' onClick={() => PatchReview('wishlist')}>
                <span className="button__text">Wishlist</span>
                <span className="button__icon">
                <ion-icon name="bookmark"></ion-icon></span>
              </button>
          :
                <button type="button" className="button" value='wishlist' onClick={() => PostReview('wishlist', movieResults.movie.original_title, `${baseURL}${movieResults.movie.poster_path}`)}>
                  <span className="button__text">Wishlist</span>
                  <span className="button__icon">
                  <ion-icon name="bookmark"></ion-icon></span>
                </button>

         }

          { inLibrary?
              <button type="button" className="button" value='favorites' onClick={() => PatchReview('favorites')}>
                  <span className="button__text">Favorites</span>
                  <span className="button__icon">
                  <ion-icon name="bookmark"></ion-icon></span>
                </button>
          :                    

              <button type="button" className="button" value='favorites' onClick={() => PostReview('favorites', movieResults.movie.original_title, movieResults.movie.poster_path)}>
              <span className="button__text">Favorites</span>
              <span className="button__icon">
                <ion-icon name="heart"></ion-icon></span>
              </button>
               
          }   

          { inLibrary? 

              <button type="button" className="button" value='check' onClick={() => PatchReview('check')}>
              <span className="button__text">Add to Library</span>
              <span className="button__icon">
                <ion-icon name="checkmark"></ion-icon>
              </span>
              </button>
            :
              <button type="button" className="button" value='check' onClick={() => PatchReview('check', movieResults.movie.original_title, movieResults.movie.poster_path)}>
              <span className="button__text">Add to Library</span>
              <span className="button__icon">
              <ion-icon name="checkmark"></ion-icon>
              </span>
              </button>
          }

          { inLibrary? 
              <button type="button" className="button" value='in_progress' onClick={() => PostReview("In Progress", movieResults.movie.original_title, movieResults.movie.poster_path)}>
              <span className="button__text">In Progress</span>
              <span className="button__icon">
                <ion-icon name="eye"></ion-icon>
              </span>
              </button>
          :
              <button type="button" className="button" value='in_progress' onClick={() => PostReview('In Progress', movieResults.movie.original_title, movieResults.movie.poster_path)}>
              <span className="button__text">In Progress</span>
              <span className="button__icon">
              <ion-icon name="eye"></ion-icon>
              </span>
              </button>
          }
          </div>
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
