import React, { useRef } from 'react';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';

import { FaBars, FaSearch, FaPlus, FaFilm, FaTv, FaBook, FaGamepad, FaSignInAlt, FaPen, FaAngleDown } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMainMenu } from '../../actions/mainMenu';
import { changeInputValueHeader } from '../../actions/header';

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

  const { searchBar } = useSelector((state) => state.header);

  const searchBarElement = useRef(null);
  
  const handleClearSearchBar = () => {
    dispatch(changeInputValueHeader("searchBar", ""));
    searchBarElement.current.focus();
  }

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
          <input ref={searchBarElement} className='header__searchBarContainer-form-searchBar' type="text" placeholder='Search media...' value={searchBar} onChange={(event) => dispatch(changeInputValueHeader("searchBar", event.target.value))} />
          {searchBar.length > 0 && (
            <button type='button' className='header__searchBarContainer-form-clearSearchBar' onClick={handleClearSearchBar}>
              <div className='header__searchBarContainer-form-clearSearchBar-icon'>
                <FaPlus />
              </div>
            </button>
          )}
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
        <NavLink
          to="/login"
          className={({isActive}) => `header__userActionsContainer-actionContainer header__userActionsContainer-actionContainer${isActive ? '--active' : ''}`}
        >
          <div className='header__userActionsContainer-actionContainer-logo'>
            <FaSignInAlt />
          </div>
          <span className='header__userActionsContainer-actionContainer-name'>Login</span>
        </NavLink>
        <NavLink
          to="/register"
          className={({isActive}) => `header__userActionsContainer-actionContainer header__userActionsContainer-actionContainer${isActive ? '--active' : ''}`}
        >
          <div className='header__userActionsContainer-actionContainer-logo'>
            <FaPen />
          </div>
          <span className='header__userActionsContainer-actionContainer-name'>Register</span>
        </NavLink>
        
      </div>
    </header>
  );
        
}

export default Header;
