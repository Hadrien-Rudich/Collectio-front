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
      <div>
        {typeof bookResult.volumeInfo.imageLinks !== 'undefined' && (
          <div>
            <img src={bookResult.volumeInfo.imageLinks.large ? bookResult.volumeInfo.imageLinks.large : bookResult.volumeInfo.imageLinks.medium} alt="" />
          </div>
        )}
        <br />
        <br />
        <h2 className="mediaDetails__mediaReleaseYear">PublishedDate : {bookResult.volumeInfo.publishedDate}</h2>
        <h2 className="mediaDetails__mediaRunTime">PageCount : {bookResult.volumeInfo.pageCount}</h2>
        <br />
        <h2 className="mediaDetails__mediaTitle">Title : {bookResult.volumeInfo.title}</h2>
        <h2 className="mediaDetails__mediaTitle">Subtitle : {bookResult.volumeInfo.subtitle}</h2>
        <br />
        <h2 className="mediaDetails__mediaTitle">Publisher : {bookResult.volumeInfo.publisher}</h2>

        <br />
        <br />
        <h3 className="mediaDetails__mediaCast">Description</h3>
        <br />
        <div dangerouslySetInnerHTML={{__html: bookResult.volumeInfo.description}} />

        <br />
        <br />
        {typeof bookResult.volumeInfo.authors !== 'undefined' && (
          <div>
            <h3 className="mediaDetails__mediaCast">Author{bookResult.volumeInfo.authors.length > 1 ? 's' : ''}</h3>
            <br />
            {bookResult.volumeInfo.authors.map((author) => (
              <h4 key={author} className="mediaDetails__mediaTitle">{author}</h4>
            ))}
          </div>
        )}

        <br />
        <br />
        <h3 className="mediaDetails__mediaCast">Categories : {bookResult.volumeInfo.categories}</h3>
      </div>
    )}
    </div>
  );
}

BookDetails.propTypes = {
  
};

export default BookDetails;
