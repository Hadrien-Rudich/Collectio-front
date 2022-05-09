import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';

import { GiMagnifyingGlass, GiPencil } from 'react-icons/gi';
import { FiLogIn, FiTv } from 'react-icons/fi';
import { MdLocalMovies, MdVideogameAsset } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { HiOutlineMenu } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMainMenu } from '../../actions/mainMenu';
import { toggleLoginModal } from '../../actions/loginModal';

const categoriesData = [
        {
            name: 'Movies',
            icon: <MdLocalMovies/>
        },
        {
            name: 'Series',
            icon: <FiTv/>
        },
        {
            name: 'Books',
            icon: <ImBooks/>
        },
        {
            name: 'Video Games',
            icon: <MdVideogameAsset/>
        }
    ]

    
function Header() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.loginModal.isOpen);

        return(
            <header className='header'>
                <div className='header__logoContainer'>
                  <div className="header__logoContainer-button" onClick={() => {dispatch(toggleMainMenu())}}>
                    <HiOutlineMenu />
                  </div>
                  <Link
                    to="/"
                    className="header__logoContainer-logo"
                  >
                    Collectio
                  </Link>
                </div>
                <div>
                <form className="header__form">
                    <input type="search" value="" placeholder="Search" className="header__input"></input>
                    <Link to='/results/:searchquery'>
                        <button type="submit" className="header__button">
                            <GiMagnifyingGlass/>
                        </button>
                    </Link>
                    <div className="header__option">
                    {categoriesData.map((category) =>(
                        
                        <div>
                            <input name="type" type="checkbox" value="type-users" id="type-users"></input>
                            <label for="type-users">
                                <svg className="edit-pen-title">
                                    {category.icon}
                                </svg>
                                <span>{category.name}</span>
                            </label>
                        </div>
                    ))}
                    </div>
                    </form>
                </div>
                <div className='header__user'>
                    <span className='header__login'><FiLogIn />
                        <p class="toggle-button"
                                id="centered-toggle-button" 
                                onClick={() => dispatch(toggleLoginModal())}
                        >
                          Login
                        </p>
                        {isOpen && <LoginForm />}
                    </span>

                    <Link to='/register'>
                        <span className='header__register'><GiPencil />
                            <p>Register</p>
                        </span>
                    </Link>
                </div>
            </header>
        );
        
}

export default Header;
