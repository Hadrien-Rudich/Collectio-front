import './style.scss';
import { GiHamburgerMenu, GiMagnifyingGlass, GiPencil } from 'react-icons/gi';
import { FiLogIn } from 'react-icons/fi';

const Header = () => {
    return(
        <header className='header'>
            <div className='header__logo'>
                <span className='header__burger'><GiHamburgerMenu/></span> 
                <h1 className='header__title'>Collectio</h1>
            </div>
            <div>
                <form action='' method='get' className='header__form'>
                    <select name='filter' id='filter' className='header__filter' multiple>
                        <option value=''>-- Choose a media --</option>
                        <option value='movie'>Movie</option>
                        <option value='serie'>Serie</option>
                        <option value='book'>Book</option>
                        <option value='videogames'>Video Games</option>
                    </select>
                    <input id='searchbar' type='search' name='search' placeholder='Search media' className='header__searchbar'></input>
                    <button className='header__look'><GiMagnifyingGlass /></button>
                </form>
            </div>
            <div>
                <span className='header__login'><FiLogIn />
                    <p>Login</p>
                </span>
                <span className='header__login'><GiPencil />
                    <p>Register</p>
                </span>
            </div>
        </header>
    );
}


export default Header;