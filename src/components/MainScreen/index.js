import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { toggleLoginModal } from '../../actions/header';
import { logout } from '../../actions/login';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import LogoutPage from '../LogoutPage';
import RegisterPage from '../RegisterPage';
import './style.scss';

function MainScreen() {
  return (
    <div className="main__screen">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logout' element={<LogoutPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/movies' element={<div>Movies</div>} />
        <Route path='/series' element={<div>Series</div>} />
        <Route path='/books' element={<div>Books</div>} />
        <Route path='/video-games' element={<div>Video games</div>} />
        <Route path='/contact' element={<div>Contact</div>} />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </div>
  );
}

MainScreen.propTypes = {

};

export default MainScreen;
