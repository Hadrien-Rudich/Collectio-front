import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBookDetailsById } from '../../actions/bookDetails';
import Loader from '../Loader';
import './style.scss';

function BookDetails() {
  const dispatch = useDispatch();
  
  const { bookDetailsLoading, bookDetailsResult } = useSelector((state) => state.bookDetails);
  const bookId = useParams().mediaId;
  
  useEffect(() => {
    dispatch(fetchBookDetailsById(bookId));
  }, []);
  
  // /**
  //  * ! show bookDetailsResult in console
  //  */
  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   }
  //   else {
  //     console.log('bookDetailsResult', bookDetailsResult);
  //   }
  // }, [bookDetailsResult]);


  return (
    <div className="mediaDetails">
    {bookDetailsLoading ? (
      <Loader />
    ) : (
        <div className="mediaContainer">
          <div className="mediaImageContainer">             
            <h1 className="mediaDetails__mediaTitle">{bookDetailsResult.volumeInfo.title}</h1>
          
          {typeof bookDetailsResult.volumeInfo.imageLinks !== 'undefined' && (
          <img src={bookDetailsResult.volumeInfo.imageLinks.thumbnail} alt="" />         
          )}
           
            <h2 className="mediaDetails__mediaReleaseYear">({bookDetailsResult.volumeInfo.publishedDate.substring(0,4)})</h2>
            <h2 className="mediaDetails__mediaRunTime">{bookDetailsResult.volumeInfo.pageCount} pages</h2>
            <div className='mediaDetails__mediaGenreContainer'>
              <h4 className="mediaDetails__mediaGenre">{bookDetailsResult.volumeInfo.categories}</h4>
          </div>                       
          <div className="mediaTextContainer"> 
           <div className="mediaCrewContainer">
            {typeof bookDetailsResult.volumeInfo.authors !== 'undefined' && (
              <div>
                <h3 className="mediaDetails__mediaCrew">Author{bookDetailsResult.volumeInfo.authors.length > 1 ? 's' : ''}</h3>
                <br />
                {bookDetailsResult.volumeInfo.authors.map((author) => (
                  <h4 key={author} className="mediaDetails__mediaTitle">{author}</h4>
                ))}                
                
              </div>              
              
            )}
              </div>                   
                                     
            <h2 className="mediaDetails__mediaTitle">Publisher : {bookDetailsResult.volumeInfo.publisher}</h2>
           
            </div>
            
            <div className="mediaOverviewContainer">        
              <h4 className="mediaDetails__mediaCast" dangerouslySetInnerHTML={{__html: bookDetailsResult.volumeInfo.description}} />
            </div>
                                 
           
               </div>
  
        
      </div>
    )}
    </div>
  );
}

export default BookDetails;
