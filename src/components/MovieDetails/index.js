import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from '../../actions/movieDetails';
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
  const userId = localStorage.getItem('userId');
  const [results, setResults] = useState('');
  const [inLibrary, setInLibrary] = useState(false);
  const [reviewDetails, setReviewDetails] = useState({});
  const { auth } = useSelector((state) => state.user);
  let baseURL = "https://image.tmdb.org/t/p/original";
  console.log(token)
  console.log(`Je suis le userId ${userId}`)



  const dispatch = useDispatch();

  const { movieDetailsLoading, movieDetailsResults } = useSelector((state) => state.movieDetails);
  const movieId = useParams().mediaId;

  useEffect(() => {    
    dispatch(fetchMovieDetailsById(movieId));
 
       GetReview() 
     
  }, [userId]);

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


  console.log(reviewDetails);

  async function GetReview() {
    console.log('get')
      try {

        const response = await axios.get(`https://collectio-app.herokuapp.com/api/movie/${movieId}`, {
          "userid": userId,
           "apimediaid": movieId,
           "library": "movie"
         }, {
          headers: {
            "authorization": token
          },
        })
        console.log(`Voici la reponse`);     
        console.log(response)
      } catch (error) {
        console.log(error)
      }

  }


  async function PostReview(list, title, coverURL) {
    console.log('post')
      try {
        // console.log(list)
        // console.log(title)
        const response = await axios.post(`https://collectio-app.herokuapp.com/api/movie/${movieId}`, {
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
        setInLibrary(true)
      } catch (error) {
        console.log(error)
      }

  }

  


  async function PatchReview(list) {

    console.log('patch')
     try {

       const response = await axios.patch(`https://collectio-app.herokuapp.com/api/movie/${movieId}`, {
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
    {movieDetailsLoading ? (
      <Loader />
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

                  
        
    
          <div className='userRatingContainer'>  
            <span className="fa fa-star"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          
          </div> 
          
        <div className="mediaImageContainer">
          <h1 className="mediaDetails__mediaTitle">{movieDetailsResults.movieDetailsResult.original_title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${movieDetailsResults.movieDetailsResult.poster_path}`} alt="" />
          <h4 className="mediaDetails__mediaReleaseYear">({movieDetailsResults.movieDetailsResult.release_date.substring(0,4)})</h4>
          <h4 className="mediaDetails__mediaRunTime">{movieDetailsResults.movieDetailsResult.runtime} minutes</h4>
          <div className='mediaDetails__mediaGenreContainer'>
          {movieDetailsResults.movieDetailsResult.genres.map((genre) => (
          <h4 key={genre.id} className="mediaDetails__mediaGenre"> {genre.name} </h4>
          ))}
          </div>
        </div>
        <div className="mediaTextContainer">
          <div>
            { inLibrary &&  <div><p>{reviewDetails.note}</p><p>{reviewDetails.comment}</p></div>}
          </div>

          {auth && (
            <div>

      
            <div className='mediaUserReview'>
             
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
              
          <div className='mediaUserListContainer'>
            { inLibrary?



            // si PAS de token, griser les boutons d'ajout de liste
              <button type="button" className="button--activelist" value='wishlist' onClick={() => PatchReview('wishlist')}>
                <span className="button__text">Wishlist</span>
                <span className="button__icon">
                <ion-icon name="bookmark"></ion-icon></span>
              </button>
            :
                <button type="button" className="button" value='wishlist' onClick={() => PostReview('wishlist', movieDetailsResults.movieDetailsResult.original_title, `${baseURL}${movieDetailsResults.movieDetailsResult.poster_path}`)}>
                  <span className="button__text">Wishlist</span>
                  <span className="button__icon">
                  <ion-icon name="bookmark"></ion-icon></span>
                </button>

            }

            { inLibrary?

            // si PAS de token, griser les boutons d'ajout de liste
              <button type="button" className="button--activelist" value='favorites' onClick={() => PatchReview('favorite')}>
                  <span className="button__text">Favorites</span>
                  <span className="button__icon">
                  <ion-icon name="bookmark"></ion-icon></span>
                </button>
            :                    

              <button type="button" className="button" value='favorites' onClick={() => PostReview('favorite', movieDetailsResults.movieDetailsResult.original_title, movieDetailsResults.movieDetailsResult.poster_path)}>
              <span className="button__text">Favorites</span>
              <span className="button__icon">
                <ion-icon name="heart"></ion-icon></span>
              </button>
                
            }   

            { inLibrary? 

              <button type="button" className="button--activelist" value='check' onClick={() => PatchReview('check')}>
              <span className="button__text">Add to Library</span>
              <span className="button__icon">
                <ion-icon name="checkmark"></ion-icon>
              </span>
              </button>
            :
              <button type="button" className="button" value='check' onClick={() => PostReview('check', movieDetailsResults.movieDetailsResult.original_title, movieDetailsResults.movieDetailsResult.poster_path)}>
              <span className="button__text">Add to Library</span>
              <span className="button__icon">
              <ion-icon name="checkmark"></ion-icon>
              </span>
              </button>
            }

            { inLibrary? 

            // si PAS de token, griser les boutons d'ajout de liste
              <button type="button" className="button--activelist" value='in_progress' onClick={() => PatchReview("in_progress")}>
              <span className="button__text">In Progress</span>
              <span className="button__icon">
                <ion-icon name="eye"></ion-icon>
              </span>
              </button>
            :
              <button type="button" className="button" value='in_progress' onClick={() => PostReview('in_progress', movieDetailsResults.movieDetailsResult.original_title, movieDetailsResults.movieDetailsResult.poster_path)}>
              <span className="button__text">In Progress</span>
              <span className="button__icon">
              <ion-icon name="eye"></ion-icon>
              </span>
              </button>
            }
          </div>
                      
          

          </div>  

        )}

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
