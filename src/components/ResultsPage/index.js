import Glide from '@glidejs/glide/dist/glide';
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import { useEffect } from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ResultsPage() {
  const resultsData = useSelector((state) => state.searchResults.results);
  const resultsDataMovie = useSelector((state) => state.searchResults.resultsMovie.results);
  const resultsDataTV = useSelector((state) => state.searchResults.resultsTV.results);
  const resultsDataVideoGames = useSelector((state) => state.searchResults.resultsVideoGames.results);

  const menuIsOpen = useSelector((state) => state.mainMenu.isOpen);

  const gliderOptions = {
    type: 'carousel',
    startAt: 0,
    focusAt: "center",
    perView: menuIsOpen ? 7 : 9,
    keyboard: false,
    swipeThreshold: false,
    dragThreshold: false,
  }
  
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
          <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Movies</h2>
          <div className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {resultsDataMovie && resultsDataMovie.map((item) => (
                  console.log(item),
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
                  console.log(item),
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

        <div key="Book">
          <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>Books</h2>
          <div className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {/* {resultsDataTV?.length > 0 && resultsDataTV.map((item) => (
                  console.log(item),
                  <Link to={`/series/${item.id}`}>
                    <li key={item.name} className="glide__slide">
                      <img className="glide__slide-image" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.name} />
                      <span>{item.name}</span>
                    </li>
                  </Link>
                ))} */}
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
                  console.log(item),
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

export default ResultsPage;