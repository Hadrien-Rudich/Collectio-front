import React, {useEffect} from 'react';
import './style.scss';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../LoginForm';

import { FaBars, FaSearch, FaPlus, FaFilm, FaTv, FaBook, FaGamepad, FaSignInAlt, FaPen, FaAngleDown } from 'react-icons/fa';

import { toggleMainMenu } from '../../actions/mainMenu';
import { toggleLoginModal } from '../../actions/loginModal';
import { searchTitleValue } from "../../actions/searchBar";
import { saveResultsData } from '../../actions/searchResults';


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
  const navigate = useNavigate();

  const isOpen = useSelector((state) => state.loginModal.isOpen);

  const searchBar= useSelector((state) => state.header.searchBar)

  useEffect(() => {
    console.log(searchBar);
  }, [searchBar])

  async function handleSubmit(event) {
    event.preventDefault()
    try {
        const response = await axios.get(`https://imdb-api.com/en/API/Search/k_ysxe8sph/${searchBar}`)
        console.log(response.data);
        dispatch(saveResultsData(response.data))
        navigate(`/results/${searchBar}`)
    } catch (error) {
        console.log(error);
    }
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
        
        <form className='header__searchBarContainer-form' onSubmit={handleSubmit}>
            <button className='header__searchBarContainer-searchIcon' type='submit'>
              <FaSearch />
            </button>
            <input 
                className='header__searchBarContainer-form-searchBar' 
                type="text"
                value={searchBar}
                onChange={(event) => {
                  dispatch(searchTitleValue(event.target.value))
              }}
                placeholder='Search media...' />
          
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
        <LoginForm />
        {/* <div className='header__userActionsContainer-actionContainer' onClick={() => dispatch(toggleLoginModal())}>
          <div className='header__userActionsContainer-actionContainer-logo'>
            <FaSignInAlt />
          </div>
          <span className='header__userActionsContainer-actionContainer-name'>Login</span>
        </div> */}
        <Link
          to="/register"
          className='header__userActionsContainer-actionContainer'
        >
          <div className='header__userActionsContainer-actionContainer-logo'>
            <FaPen />
          </div>
          <span className='header__userActionsContainer-actionContainer-name'>Register</span>
        </Link>
        
      </div>
    </header>
  );
        
}

export default Header;
