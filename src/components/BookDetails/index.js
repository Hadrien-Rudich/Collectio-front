import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBookDetails, saveBookResult, setBookLoading } from '../../actions/bookDetails';
import Loader from '../Loader';
import './style.scss';

function BookDetails() {
  const dispatch = useDispatch();

  const { loading, bookResult } = useSelector((state) => state.bookDetails);
  const { mediaId } = useParams();

  const getBookData = async () => {
    dispatch(fetchBookDetails(mediaId));
  }

  // useEffect(() => {
  //   if (typeof bookResult !== 'undefined') {
  //     console.log('bookResult', bookResult);
  //   }
  // }, [bookResult]);

  useEffect(() => {
    getBookData();
  }, []);



  return (
    <div className="mediaDetails">
    {loading ? (
      <Loader />
    ) : (
        <div className="mediaContainer">
          <div className="mediaImageContainer">             
            <h1 className="mediaDetails__mediaTitle">{bookResult.volumeInfo.title}</h1>
          
          {typeof bookResult.volumeInfo.imageLinks !== 'undefined' && (
          <img src={bookResult.volumeInfo.imageLinks.thumbnail} alt="" />         
          )}
           
            <h2 className="mediaDetails__mediaReleaseYear">({bookResult.volumeInfo.publishedDate.substring(0,4)})</h2>
            <h2 className="mediaDetails__mediaRunTime">{bookResult.volumeInfo.pageCount} pages</h2>
            <div className='mediaDetails__mediaGenreContainer'>
              <h4 className="mediaDetails__mediaGenre">{bookResult.volumeInfo.categories}</h4>
          </div>                       
          <div className="mediaTextContainer"> 
           <div className="mediaCrewContainer">
            {typeof bookResult.volumeInfo.authors !== 'undefined' && (
              <div>
                <h3 className="mediaDetails__mediaCrew">Author{bookResult.volumeInfo.authors.length > 1 ? 's' : ''}</h3>
                <br />
                {bookResult.volumeInfo.authors.map((author) => (
                  <h4 key={author} className="mediaDetails__mediaTitle">{author}</h4>
                ))}                
                
              </div>              
              
            )}
              </div>                   
                                     
            <h2 className="mediaDetails__mediaTitle">Publisher : {bookResult.volumeInfo.publisher}</h2>
           
            </div>
            
            <div className="mediaOverviewContainer">        
              <h4 className="mediaDetails__mediaCast" dangerouslySetInnerHTML={{__html: bookResult.volumeInfo.description}} />
            </div>
                                 
           
               </div>
  
        
      </div>
    )}
    </div>
  );
}

BookDetails.propTypes = {
  
};

export default BookDetails;
