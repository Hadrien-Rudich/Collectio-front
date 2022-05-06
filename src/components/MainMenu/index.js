import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { MdLocalMovies, MdVideogameAsset } from 'react-icons/md';
import { FiTv } from 'react-icons/fi';
import { ImBooks } from 'react-icons/im';
import { FaInfo } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';

import './style.scss';
import MenuIcon from '../MenuIcon';

function MainMenu() {
  const categoriesDataTemp = [
    {
      name: 'Movies',
      route: '/movies',
      icon: MdLocalMovies,
    },
    {
      name: 'Series',
      route: '/series',
      icon: FiTv,
    },
    {
      name: 'Books',
      route: '/books',
      icon: ImBooks,
    },
    {
      name: 'Video games',
      route: '/video-games',
      icon: MdVideogameAsset,
    },
  ];

  return (
    <div className="main__menu">
      <div className="main__menu-section--first">
        <NavLink
          key="home"
          to="/"
          className={({isActive}) => `main__menu-link ${isActive ? 'main__menu-link--active' : ''}`}
        >
          <MenuIcon icon={AiFillHome} />
          Home
        </NavLink>
      </div>
      <div className="main__menu-section">
        <span className="main__menu-section-label">
          Categories
        </span>
        {categoriesDataTemp.map((category) => (
          <NavLink
            key={category.route}
            to={category.route}
            className={({isActive}) => `main__menu-link ${isActive ? 'main__menu-link--active' : ''}`}
          >
            <MenuIcon icon={category.icon} />
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="main__menu-section">
        <span className="main__menu-section-label">
          Other
        </span>
        <NavLink
          key="contact"
          to="/contact"
          className={({isActive}) => `main__menu-link ${isActive ? 'main__menu-link--active' : ''}`}
        >
          <MenuIcon icon={RiContactsBookFill} />
          Contact
        </NavLink>
        <NavLink
          key="about"
          to="/about"
          className={({isActive}) => `main__menu-link ${isActive ? 'main__menu-link--active' : ''}`}
        >
          <MenuIcon icon={FaInfo} />
          About
        </NavLink>
      </div>
    </div>
  );
}

MainMenu.propTypes = {
  
};

export default MainMenu;
