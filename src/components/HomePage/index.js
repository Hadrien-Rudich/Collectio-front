import Glide from '@glidejs/glide/dist/glide';
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveResultsData, saveResultsDataMovie, saveResultsDataTV, saveResultsDataVideoGames } from '../../actions/searchResults';

function HomePage() {

  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state) => state.mainMenu.isOpen);
  const resultsData = useSelector((state) => state.searchResults.results);

  const resultsDataMovie = useSelector((state) => state.searchResults.resultsMovie.results);
  const resultsDataTV = useSelector((state) => state.searchResults.resultsTV.results);
  const resultsDataVideoGames = useSelector((state) => state.searchResults.resultsVideoGames.results);

  const inTheater = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=53d8914dec27b153e9ddc38fedcfb93e&language=en-US&France')
        dispatch(saveResultsDataMovie(response.data))
    } catch (error) {
        console.log(error);
    }
  }

  const TV = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=53d8914dec27b153e9ddc38fedcfb93e&language=en-US&page=1')
      dispatch(saveResultsDataTV(response.data))
    } catch (error) {
      console.log(error);
    }
  }

  const VideoGames = async () => {
    try {
      const response = await axios.get('https://api.rawg.io/api/games?key=65da31f76aac4be6aeead35e091febd7&dates=2022-01-01,2022-12-12')
      dispatch(saveResultsDataVideoGames(response.data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (typeof resultsDataVideoGames !== 'undefined') {
    }
  }, [resultsDataVideoGames]);

  useEffect(() => {
    return () => {
      inTheater();
      TV();
      VideoGames();
    }
  }, []);

  const gliderOptions = {
    type: 'slider',
    startAt: 0,
    bound: true,
    focusAt: 0,
    perView: menuIsOpen ? 7 : 9,
    keyboard: false,
    swipeThreshold: false,
    dragThreshold: false,
  }

  useEffect(() => {
    if (typeof resultsDataMovie !== 'undefined') {      
      console.log('resultsDataMovie', resultsDataMovie);
      new Glide("#glideMovies", gliderOptions).mount();
    }
  }, [resultsDataMovie]);

  useEffect(() => {
    if (typeof resultsDataTV !== 'undefined') {      
      console.log('resultsDataTV', resultsDataTV);
      new Glide("#glideSeries", gliderOptions).mount();
    }
  }, [resultsDataTV]);

  // useEffect(() => {
  //   if (typeof resultsDataMovie !== 'undefined') {
  //     new Glide("#glideBooks", gliderOptions).mount();
  //   }
  // }, [resultsDataMovie]);

  useEffect(() => {
    if (typeof resultsDataVideoGames !== 'undefined') {
      console.log('resultsDataVideoGames', resultsDataVideoGames);
      new Glide("#glideVideoGames", gliderOptions).mount();
    }
  }, [resultsDataVideoGames]);


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
        <div className="glideContainer">
          <div id="glideMovies" className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
              {resultsDataMovie && resultsDataMovie.map((item) => (
                <Link key={item.id} to={`/movies/${item.id}`}>
                  <li className="glide__slide">
                    <img className="glide__slide-image" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                    <span>{item.title}</span>
                  </li>
                </Link>
              ))}
              </ul>
              <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Series</h2>
        <div className="glideContainer">
          <div id="glideSeries" className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
              {resultsDataTV?.length > 0 && resultsDataTV.map((item) => (
                  <Link key={item.name} to={`/series/${item.id}`}>
                    <li className="glide__slide">
                      <img className="glide__slide-image" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.name} />
                      <span>{item.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Books</h2>
        <div className="glideContainer">
          <div id="glideBooks" className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
              {resultsDataVideoGames?.length > 0 && resultsDataVideoGames.map((item) => (
                  <Link key={item.name} to={`/video-games/${item.id}`}>
                    <li className="glide__slide">
                      <img className="glide__slide-image" src={item.background_image} alt={item.name} />
                      <span>{item.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Video Games</h2>
        <div className="glideContainer">
          <div id="glideVideoGames" className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
              {resultsDataVideoGames?.length > 0 && resultsDataVideoGames.map((item) => (
                  <Link key={item.name} to={`/video-games/${item.id}`}>
                    <li className="glide__slide">
                      <img className="glide__slide-image" src={item.background_image} alt={item.name} />
                      <span>{item.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
              </div>
            </div>
          </div>
        </div>
    
    </div>

    
  );
}

HomePage.propTypes = {
  
};

export default HomePage;
