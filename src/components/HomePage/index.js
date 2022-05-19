import Glide from '@glidejs/glide/dist/glide';
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLatestMoviesRelease,
  fetchLatestSeriesRelease,
  fetchLatestBooksRelease,
  fetchLatestVideoGamesRelease,

  saveLatestMoviesReleaseGlide,
  saveLatestSeriesReleaseGlide,
  saveLatestBooksReleaseGlide,
  saveLatestVideoGamesReleaseGlide,
} from '../../actions/homePage';
import Loader from '../Loader';

function HomePage() {

  const dispatch = useDispatch();
  const isInitialMount = useRef(true);

  const menuIsOpen = useSelector((state) => state.mainMenu.isOpen);
  const { 
    latestMoviesReleaseResult,
    latestSeriesReleaseResult,
    latestBooksReleaseResult,
    latestVideoGamesReleaseResult,

    latestMoviesReleaseLoading,
    latestSeriesReleaseLoading,
    latestBooksReleaseLoading,
    latestVideoGamesReleaseLoading,
  } = useSelector((state) => state.homePage);

  const gliderOptions = {
    type: 'slider',
    startAt: 0,
    bound: true,
    focusAt: 0,
    perView: menuIsOpen ? 7 : 9,
    keyboard: false,
    swipeThreshold: false,
    dragThreshold: false,
    breakpoints: {
      1650: {
        perView: menuIsOpen ? 5 : 7,
      },
      1250: {
        perView: menuIsOpen ? 3 : 5,
      },
      880: {
        perView: menuIsOpen ? 1 : 3,
      },
      590: {
        perView: 1,
      }
    }
  }


  useEffect(() => {
    if (typeof latestMoviesReleaseResult === "undefined") {
      dispatch(fetchLatestMoviesRelease());
    }
    if (typeof latestSeriesReleaseResult === "undefined") {
      dispatch(fetchLatestSeriesRelease());
    }
    if (typeof latestBooksReleaseResult === "undefined") {
      dispatch(fetchLatestBooksRelease());
    }
    if (typeof latestVideoGamesReleaseResult === "undefined") {
      dispatch(fetchLatestVideoGamesRelease());
    }
  }, []);


  useEffect(() => {
    if (!latestMoviesReleaseLoading) {
      dispatch(saveLatestMoviesReleaseGlide(new Glide("#glideMovies", gliderOptions).mount()));
    }
  }, [latestMoviesReleaseLoading]);

  useEffect(() => {
    if (!latestSeriesReleaseLoading) {
      dispatch(saveLatestSeriesReleaseGlide(new Glide("#glideSeries", gliderOptions).mount()));
    }
  }, [latestSeriesReleaseLoading]);

  useEffect(() => {
    if (!latestBooksReleaseLoading) {
      dispatch(saveLatestBooksReleaseGlide(new Glide("#glideBooks", gliderOptions).mount()));
    }
  }, [latestBooksReleaseLoading]);

  useEffect(() => {
    if (!latestVideoGamesReleaseLoading) {
      dispatch(saveLatestVideoGamesReleaseGlide(new Glide("#glideVideoGames", gliderOptions).mount()));
    }
  }, [latestVideoGamesReleaseLoading]);

  

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
    else {
      setTimeout(() => {
        dispatch(saveLatestMoviesReleaseGlide(new Glide("#glideMovies", gliderOptions).mount()));
        dispatch(saveLatestSeriesReleaseGlide(new Glide("#glideSeries", gliderOptions).mount()));
        dispatch(saveLatestBooksReleaseGlide(new Glide("#glideBooks", gliderOptions).mount()));
        dispatch(saveLatestVideoGamesReleaseGlide(new Glide("#glideVideoGames", gliderOptions).mount()));
      }, menuIsOpen ? 565 : 420);
    }
  }, [menuIsOpen]);


  // useEffect(() => {
  //   if (typeof latestMoviesReleaseResult !== 'undefined') {
  //     const slideActive = document.querySelector('.glide__slide--active');
  //     if (gliderOptions.perView === 9) {
  //       const currentSlide = slideActive.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
  //       currentSlide.style.transition = "transform 200ms";
  //       currentSlide.style.transformOrigin = "50% 0";
  //       currentSlide.style.transform = "scale(1.1)";
  //     }
  //     else if (gliderOptions.perView === 7) {
  //       const currentSlide = slideActive.nextElementSibling.nextElementSibling.nextElementSibling;
  //       currentSlide.style.transition = "transform 200ms";
  //       currentSlide.style.transformOrigin = "50% 0";
  //       currentSlide.style.transform = "scale(1.1)";
  //     }
  //     else if (gliderOptions.perView === 5) {
  //       const currentSlide = slideActive.nextElementSibling.nextElementSibling;
  //       currentSlide.style.transition = "transform 200ms";
  //       currentSlide.style.transformOrigin = "50% 0";
  //       currentSlide.style.transform = "scale(1.1)";
  //     }
  //     else if (gliderOptions.perView === 3) {
  //       const currentSlide = slideActive.nextElementSibling;
  //       currentSlide.style.transition = "transform 200ms";
  //       currentSlide.style.transformOrigin = "50% 0";
  //       currentSlide.style.transform = "scale(1.1)";
  //     }
  //     else if (gliderOptions.perView === 1) {
  //       const currentSlide = slideActive;
  //       currentSlide.style.transition = "transform 200ms";
  //       currentSlide.style.transformOrigin = "50% 0";
  //       currentSlide.style.transform = "scale(1.1)";
  //     }
  //   }
  //   // console.log(slideActive.nextElementSibling);
  // }, [latestMoviesReleaseResult, gliderOptions.perView]);



  // useEffect(() => {
  //   if (typeof resultsDataMovie !== 'undefined' && typeof resultsDataTV !== 'undefined' && typeof resultsDataVideoGames !== 'undefined') {
  //     console.log('init glides');
  //     const glides = document.querySelectorAll('.glide');
  //     glides.forEach((glide) => {
  //       const glideSlides = glide.querySelectorAll('.glide__slides');
  //       glideSlides.forEach((glideSlide) => {
  //         const glideSlidesClones = glideSlide.querySelectorAll('.glide__slide--clone');
  //         glideSlidesClones.forEach((glideSlideClone) => {
  //           glideSlide.removeChild(glideSlideClone);
  //         });
  //       })
  //     })
  //     if (glides && glides.length > 0) {
  //       for (let i = 0; i < glides.length; i++) {
  //         const glideElement = new Glide(glides[i], gliderOptions).destroy();
  //         glideElement.mount();
  //       }
  //     }
  //   }
  // }, [resultsDataMovie, resultsDataTV, resultsDataVideoGames])

  
  // useEffect(() => {
  //   return() => {
  //       console.log(resultsData);
  //   }
  // }, [resultsDataMovie])
  // let glidesList = [];

  // useEffect(() => {
  //   console.log(glidesList);
  //   glidesList.forEach((glide) => {
  //     console.log('perView :', glide.glideElement._o.perView);
  //   });
  // }, [glidesList]);



 

  return (
    <div className="homePage">
        <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Movie</h2>
        {latestMoviesReleaseLoading ? (
          <div style={{ padding: '5em 0' }}>
            <Loader />
          </div>
        ) : (
          <div className="glideContainer">
            <div id="glideMovies" className="glide" style={{ transition: 'all 550ms' }}>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                {latestMoviesReleaseResult && latestMoviesReleaseResult.results.map((item) => (
                  <li key={item.id} className="glide__slide">
                    <Link to={`/movies/${item.id}`} className="glide__slide-link">
                      <img className="glide__slide-link-image" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                      <span className="glide__slide-link-title">{item.title}</span>
                    </Link>
                  </li>
                ))}
                </ul>
                <div className="glide__arrows" data-glide-el="controls">
                  <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                  <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Series</h2>
        {latestSeriesReleaseLoading ? (
          <div style={{ padding: '5em 0' }}>
            <Loader />
          </div>
        ) : (
          <div className="glideContainer">
            <div id="glideSeries" className="glide" style={{ transition: 'all 550ms' }}>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                {latestSeriesReleaseResult && latestSeriesReleaseResult.results.map((item) => (
                    <li key={item.id} className="glide__slide">
                      <Link to={`/series/${item.id}`} className="glide__slide-link">
                        <img className="glide__slide-link-image" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.name} />
                        <span className="glide__slide-link-title">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="glide__arrows" data-glide-el="controls">
                  <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                  <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Books</h2>
        {latestBooksReleaseLoading ? (
          <div style={{ padding: '5em 0' }}>
            <Loader />
          </div>
        ) : (
          <div className="glideContainer">
            <div id="glideBooks" className="glide" style={{ transition: 'all 550ms' }}>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                {latestBooksReleaseResult && latestBooksReleaseResult.items.map((item) => (
                    <li key={item.id} className="glide__slide">
                      <Link to={`/books/${item.id}`} className="glide__slide-link">
                        <img className="glide__slide-link-image" src={item.volumeInfo.imageLinks && (item.volumeInfo.imageLinks.thumbnail) && item.volumeInfo.imageLinks.smallThumbnail } alt={item.name} />
                        <span className="glide__slide-link-title">{item.volumeInfo.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="glide__arrows" data-glide-el="controls">
                  <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                  <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Video Games</h2>
        {latestVideoGamesReleaseLoading ? (
          <div style={{ padding: '5em 0' }}>
            <Loader />
          </div>
        ) : (
          <div className="glideContainer">
            <div id="glideVideoGames" className="glide" style={{ transition: 'all 550ms' }}>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                {latestVideoGamesReleaseResult && latestVideoGamesReleaseResult.results.map((item) => (
                    <li key={item.name} className="glide__slide">
                      <Link to={`/video-games/${item.id}`} className="glide__slide-link">
                        <img className="glide__slide-link-image" src={item.background_image} alt={item.name} />
                        <span className="glide__slide-link-title">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="glide__arrows" data-glide-el="controls">
                  <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                  <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
              </div>
            </div>
          </div>
        )}
    
    </div>

    
  );
}

HomePage.propTypes = {
  
};

export default HomePage;
