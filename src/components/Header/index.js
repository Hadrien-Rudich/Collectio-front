import './style.scss';
import { GiHamburgerMenu, GiMagnifyingGlass, GiPencil } from 'react-icons/gi';
import { FiLogIn, FiTv } from 'react-icons/fi';
import { MdLocalMovies, MdVideogameAsset } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';

const Header = () => {
    return(
        <header className='header'>
            <div className='header__logo'>
                <span className='header__burger'><GiHamburgerMenu/></span> 
                <h1 className='header__title'>Collectio</h1>
            </div>
            <div>
            <form class="search-form">
                <input type="search" value="" placeholder="Search" class="search-input"></input>
                <button type="submit" class="search-button">
                    <GiMagnifyingGlass/>
                </button>
                <div class="search-option">
                    <div>
                        <input name="type" type="checkbox" value="type-users" id="type-users"></input>
                        <label for="type-users">
                            <svg class="edit-pen-title">
                                <MdLocalMovies/>
                            </svg>
                            <span>Movies</span>
                        </label>
                    </div>
                    
                    <div>
                    <input name="type" type="checkbox" value="type-posts" id="type-posts"></input>
                    <label for="type-posts">
                        <svg class="edit-pen-title">
                            <FiTv/>
                        </svg>
                        <span>Series</span>
                    </label>
                    </div>
                    <div>
                    <input name="type" type="checkbox" value="type-images" id="type-images"></input>
                    <label for="type-images">
                        <svg class="edit-pen-title">
                            <ImBooks/>
                        </svg>
                        <span>Books</span>
                    </label>
                    </div>
                    <div>
                    <input name="type" type="checkbox" value="type-special" id="type-special"></input>
                    <label for="type-special">
                        <svg class="edit-pen-title">
                            <MdVideogameAsset/>
                        </svg>
                        <span>VideoGames</span>
                    </label>
                    </div>
                </div>
                </form>
            </div>
            <div className='header__user'>
                <span className='header__login'><FiLogIn />
                    <p>Login</p>
                </span>
                <span className='header__register'><GiPencil />
                    <p>Register</p>
                </span>
            </div>
        </header>
    );
}


export default Header;