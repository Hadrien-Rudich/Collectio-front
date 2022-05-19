import Glide from '@glidejs/glide/dist/glide';
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import { useEffect } from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ResultsPage() {
  const resultsData = useSelector((state) => state.searchResults.results);
  

  const categoriesDataTemp = [
    {
      name: 'Movies',
      slug: 'movies',
      route: '/movies',
      items: [
        {
          name: 'Iron Man 3',
          imageURL: 'https://fr.web.img5.acsta.net/medias/nmedia/18/91/08/37/20508296.jpg',
        },
        {
          name: 'Captain America: The Winter Soldier',
          imageURL: 'https://fr.web.img6.acsta.net/pictures/14/01/31/17/06/486036.jpg',
        },
        {
          name: 'Avengers: Infinity War',
          imageURL: 'https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg',
        },
        {
          name: 'Eternals',
          imageURL: 'https://fr.web.img6.acsta.net/pictures/21/10/13/10/33/5985249.jpg',
        },
        {
          name: 'Captain America: Civil War',
          imageURL: 'https://fr.web.img5.acsta.net/pictures/16/03/11/09/46/182814.jpg',
        },
        {
          name: 'Thor Ragnarock',
          imageURL: 'https://fr.web.img3.acsta.net/pictures/17/08/24/17/34/098917.jpg',
        },
        {
          name: 'Avengers: EndGame',
          imageURL: 'https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg',
        },
        {
          name: 'Shang-Chi and the Legend of the Ten Rings',
          imageURL: 'https://fr.web.img3.acsta.net/pictures/21/08/25/11/54/3128925.jpg',
        },
        {
          name: 'Avengers: Age of Ultron',
          imageURL: 'https://fr.web.img4.acsta.net/pictures/15/02/24/18/29/161927.jpg',
        },
      ],
    },
    {
      name: 'Series',      
      slug: 'series',
      route: '/series',
      items: [
        {
          name: 'Moon Knight',
          imageURL: 'https://www.francetvinfo.fr/pictures/uGKKmvQfk93jmlwrBiff7JkQcno/fit-in/720x/2022/03/15/php8A3zAY.jpg',
        },
        {
          name: 'Hawkeye',
          imageURL: 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2021/11/Hawkeye%20poster%20Renner.jpg',
        },
        {
          name: 'Loki',
          imageURL: 'https://fr.web.img3.acsta.net/pictures/21/05/12/16/22/0714838.jpg',
        },
      ],
    },
    {
      name: 'Books',
      slug: 'books',
      route: '/books',
      items: [
        {
          name: 'Franklin',
          imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61Y9AtCNltL.jpg',
        },
        {
          name: 'Harry Potter',
          imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81gP4fFhsbL.jpg',
        },
      ],
    },
    {
      name: 'Video games',
      slug: 'video-games',
      route: '/video-games',
      items: [
        {
          name: 'GTA V',
          imageURL: 'https://m.media-amazon.com/images/I/91O2cwfTxDL._AC_SY550_.jpg',
        },
        {
          name: 'Minecraft',
          imageURL: 'https://www.codesproduit.fr/wp-content/uploads/2021/01/minecraft.jpg',
        },
      ],
    },
  ];

  const menuIsOpen = useSelector((state) => state.mainMenu.isOpen);

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
      {categoriesDataTemp.map((category) => (
        <div key={category.name}>
          <h2 style={{ fontWeight: 'bold', fontSize: '2em', marginBottom: '1.2em' }}>{category.name}</h2>
          <div className="glide" style={{ transition: 'all 550ms' }}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {resultsData.results.map((item) => (
                  <li key={item.id} className="glide__slide">
                    <Link to={`/${category.slug}/${item.id}`} className="glide__slide-link">
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
      ))}
    </div>
  );

}

export default ResultsPage;