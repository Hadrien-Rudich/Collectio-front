import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';

import { FaBars, FaSearch, FaPlus, FaFilm, FaTv, FaBook, FaGamepad, FaSignInAlt, FaPen, FaAngleDown } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMainMenu } from '../../actions/mainMenu';
import { toggleLoginModal } from '../../actions/loginModal';

const categoriesData = [
        {
            name: 'Movies',
            icon: <FaFilm/>
        },
        {
            name: 'Series',
            icon: <FaTv/>
        },
        {
            name: 'Books',
            icon: <FaBook/>
        },
        {
            name: 'Video Games',
            icon: <FaGamepad/>
        }
    ]

    
function Header() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.loginModal.isOpen);

  return(
    <header className='header'>
      <div className='header__logoContainer'>
        <div className="header__logoContainer-button" onClick={() => {dispatch(toggleMainMenu())}}>
          <FaBars />
        </div>
        <Link
          to="/"
          className="header__logoContainer-logo"
        >
          Collectio
        </Link>
      </div>
      <div className='header__searchBarContainer'>
        <div className='header__searchBarContainer-searchIcon'>
          <FaSearch />
        </div>
        <form className='header__searchBarContainer-form'>
          <input className='header__searchBarContainer-form-searchBar' type="text" placeholder='Search media...' />
          {true && <button type='button' className='header__searchBarContainer-form-clearSearchBar'>
            <div className='header__searchBarContainer-form-clearSearchBar-icon'>
              <FaPlus />
            </div>
          </button>}
          <div className='header__searchBarContainer-form-filters'>
            {categoriesData.map((category) =>(
              <div className='header__searchBarContainer-form-filters-option' key={category.name}>
                <input id={category.name.toLowerCase()} className='header__searchBarContainer-form-filters-option-checkbox'  name={category.name.toLowerCase()} type="checkbox"/>
                <label className='header__searchBarContainer-form-filters-option-icon' htmlFor={category.name.toLowerCase()} title={category.name}>
                  {category.icon}
                </label>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div className='header__userActionsContainer'>
        <div className='header__userActionsContainer-actionContainer' onClick={() => dispatch(toggleLoginModal())}>
          <div className='header__userActionsContainer-actionContainer-logo'>
            <FaSignInAlt />
          </div>
          <span className='header__userActionsContainer-actionContainer-name'>Login</span>
        </div>
        <Link
          to="/register"
          className='header__userActionsContainer-actionContainer'
        >
          <div className='header__userActionsContainer-actionContainer-logo'>
            <FaPen />
          </div>
          <span className='header__userActionsContainer-actionContainer-name'>Register</span>
        </Link>
        {isOpen && <LoginForm />}
      </div>
    </header>
  );
        
}

export default Header;
