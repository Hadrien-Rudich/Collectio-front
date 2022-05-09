import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './style.scss';

function HomePage() {
  const categoriesDataTemp = [
    {
      name: 'Movies',
      route: '/movies',
      items: [
        {
          name: 'Avengers'
        },
        {
          name: 'Iron Man'
        }
      ],
    },
    {
      name: 'Series',
      route: '/series',
      items: [
        {
          name: 'Avengers'
        },
        {
          name: 'Iron Man'
        }
      ],
    },
    {
      name: 'Books',
      route: '/books',
      items: [
        {
          name: 'Avengers'
        },
        {
          name: 'Iron Man'
        }
      ],
    },
    {
      name: 'Video games',
      route: '/video-games',
      items: [
        {
          name: 'Avengers'
        },
        {
          name: 'Iron Man'
        }
      ],
    },
  ];

  const mainGlide = new Glide(".main__glide");

  useEffect(() => {
    mainGlide.mount();
    return () => mainGlide.destroy();
  }, [mainGlide]);

  return (
    <div className="homePage">
      {categoriesDataTemp.map((category) => (
        <div key={category.name}>
          <h2 style={{ colo: 'red' }}>{category.name}</h2>
          <div className="main__glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {category.items.map((item) => (
                  <li key={item.name} className="glide__slide">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

HomePage.propTypes = {
  
};

export default HomePage;
