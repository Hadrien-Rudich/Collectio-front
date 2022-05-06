import './style.scss';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu, GiMagnifyingGlass, GiPencil } from 'react-icons/gi';
import { FiLogIn, FiTv } from 'react-icons/fi';
import { MdLocalMovies, MdVideogameAsset } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';

const Header = () => {
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

    return(
        <header className='header'>
            <div className='header__logo'>
                <span className='header__burger'><GiHamburgerMenu/></span>
                <Link to="/">
                   <h1 className='header__title'> Collectio</h1>
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
                    <p>Login</p>
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