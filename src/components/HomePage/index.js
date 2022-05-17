import Glide from '@glidejs/glide/dist/glide';
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveResultsData } from '../../actions/searchResults';

function HomePage() {

  const dispatch = useDispatch;
  const menuIsOpen = useSelector((state) => state.mainMenu.isOpen);
  const resultsData = useSelector((state) => state.searchResults.results);
  // console.log(resultsData);

  async function inTheater() {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=53d8914dec27b153e9ddc38fedcfb93e&language=en-US&France')
        console.log(response.data);
        dispatch(saveResultsData(response.data))
    } catch (error) {
        console.log(error);
    }
}

  async function TV(){
    try {
      const response = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=53d8914dec27b153e9ddc38fedcfb93e&language=en-US&page=1')
      console.log(response.data);
      dispatch(saveResultsData(response.data))
    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
  return() => {
      inTheater()
      // TV()
  }
}, [])

  const gliderOptions = {
    type: 'carousel',
    startAt: 0,
    focusAt: "center",
    perView: menuIsOpen ? 7 : 9,
    keyboard: false,
    swipeThreshold: false,
    dragThreshold: false,
  }

  // let glidesList = [];

  // useEffect(() => {
  //   console.log(glidesList);
  //   glidesList.forEach((glide) => {
  //     console.log('perView :', glide.glideElement._o.perView);
  //   });
  // }, [glidesList]);
  
  useEffect(() => {
    return () => {
      const glides = document.querySelectorAll('.glide');
      if (glides && glides.length > 0) {
        for (let i = 0; i < glides.length; i++) {
          const glideElement = new Glide(glides[i], gliderOptions).mount();
          // glideElement.update({
          //   perView: menuIsOpen ? 7 : 9,
          // });
          // glidesList[i] = {
          //   name: `glide${i + 1}`,
          //   glideElement,
          // }
        }
      }
    }
  }, []);

  return (
    <div className="homePage">
      
        <div key="Movie">
          <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Movie</h2>
          <div className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {resultsData.results.map((item) => (
                  <Link to={`/movies/${item.id}`}>
                    <li key={item.title} className="glide__slide">
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

        <div key="Serie">
          <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Series</h2>
          <div className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {resultsData.results.map((item) => (
                  <Link to={`/series/${item.id}`}>
                    <li key={item.title} className="glide__slide">
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
    
    </div>

    
  );
}

HomePage.propTypes = {
  
};

export default HomePage;
