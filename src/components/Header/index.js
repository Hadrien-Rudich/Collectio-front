import { useDispatch } from 'react-redux';
import { toggleMainMenu } from '../../actions/mainMenu';
import MenuIcon from '../MenuIcon';
import './style.scss';

import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__logoContainer">
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
      <div className="header__searchBar">
        <p>SearchBar</p>
      </div>
      <div className="header__userContainer">
        <p>Login</p>
        <p>Register</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  
};

export default Header;
