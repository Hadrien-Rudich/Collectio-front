import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { MdLocalMovies, MdVideogameAsset } from 'react-icons/md';
import { FiTv } from 'react-icons/fi';
import { ImBooks } from 'react-icons/im';

import './style.scss';
import MenuIcon from '../MenuIcon';

function Menu() {
  const categories = [
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
    <div className="menu">
      <NavLink
        key="home"
        to="/"
        className={({isActive}) => `menu__link ${isActive ? 'menu__link--active' : ''}`}
      >
        <MenuIcon icon={AiFillHome} />
        Home
      </NavLink>
      <div className="menu__section">
        <span className="menu__section-label">
          Categories
        </span>
        {categories.map((category) => (
          <NavLink
            key={category.route}
            to={category.route}
            className={({isActive}) => `menu__link ${isActive ? 'menu__link--active' : ''}`}
          >
            <MenuIcon icon={category.icon} />
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

Menu.propTypes = {
  
};

export default Menu;
