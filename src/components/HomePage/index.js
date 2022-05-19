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

  const resultsDataMovie = useSelector((state) => {
    console.log('JE TESTE MON STATE 1 --> ', state.searchResults.resultsMovie.results)
    return state.searchResults.resultsMovie.results
  });
  const resultsDataTV = useSelector((state) => {
    console.log('JE TESTE MON STATE 2 --> ', state.searchResults.resultsTV.results)
    return state.searchResults.resultsTV.results
  });
  const resultsDataVideoGames = useSelector((state) => {
    console.log('JE TESTE MON STATE 3 --> ', state.searchResults.resultsVideoGames.results)
    return state.searchResults.resultsVideoGames.results
  });

  // const resultsDataTV = useSelector((state) => state.searchResults.resultsTV);

  // const resultsDataMovie = useSelector((state) => state.searchResults.resultsMovie.results);
  // const resultsDataTV = useSelector((state) => state.searchResults.resultsTV.results);

  // console.log(resultsData);

  console.log("ICI JE SUIS LA EN DEHORS DU USEEFFECT")

  const apiKey = "53d8914dec27b153e9ddc38fedcfb93e";
  const apiKeyGames = "65da31f76aac4be6aeead35e091febd7"; 

  const inTheater = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&France`)
        console.log("inTheater", response.data);
        dispatch(saveResultsDataMovie(response.data))
    } catch (error) {
        console.log(error);
    }
}

  const TV = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`)
      console.log("TV", response.data);
      console.log(response.data);
      dispatch(saveResultsDataTV(response.data))
    } catch (error) {
      console.log(error);
    }
  }

  const VideoGames = async () => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKeyGames}&dates=2022-01-01,2022-12-12`)
      console.log("VideoGames", response.data);
      console.log(response.data);
      dispatch(saveResultsDataVideoGames(response.data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    console.log("1) je suis ici dans le useEffect")

    console.log({
      "AVANCEE" : "PREMIERE EXECUTION",
      resultsDataMovie,
      resultsDataTV,
      resultsDataVideoGames
    })

    const execFetch = async () => {
      await inTheater()
      await TV()
      await VideoGames()
      console.log({
        "AVANCEE" : "DEUXIEME EXECUTION",
        resultsDataMovie,
        resultsDataTV,
        resultsDataVideoGames
      })
    }
    execFetch()




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
    
    // return () => {
    //   const glides = document.querySelectorAll('.glide');
    //   if (glides && glides.length > 0) {
    //     for (let i = 0; i < glides.length; i++) {
    //       const glideElement = new Glide(glides[i], gliderOptions).mount();
    //       // glideElement.update({
    //       //   perView: menuIsOpen ? 7 : 9,
    //       // });
    //       // glidesList[i] = {
    //       //   name: `glide${i + 1}`,
    //       //   glideElement,
    //       // }
    //     }
    //   }
    // }
  }, []);

  
  const gliderOptions = {
    type: 'carousel',
    startAt: 0,
    focusAt: "center",
    perView: menuIsOpen ? 7 : 9,
    keyboard: false,
    swipeThreshold: false,
    dragThreshold: false,
  }
  
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
      
        <div key="Movie">
          <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Movie</h2>
          <div className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
              {resultsDataMovie && resultsDataMovie.map((item) => (
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
              {resultsDataTV?.length > 0 && resultsDataTV.map((item) => (
                  <Link to={`/series/${item.id}`}>
                    <li key={item.name} className="glide__slide">
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

        <div key="VideoGames">
          <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Video Games</h2>
          <div className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
              {resultsDataVideoGames?.length > 0 && resultsDataVideoGames.map((item) => (
                  <Link to={`/video-games/${item.id}`}>
                    <li key={item.name} className="glide__slide">
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
