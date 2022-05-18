import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { toggleLoginModal } from '../../actions/header';
import { logout } from '../../actions/login';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import LogoutPage from '../LogoutPage';
import ProfilePage from '../ProfilePage';
import LibraryPage from '../LibraryPage';
import RegisterPage from '../RegisterPage';
import ResultsPage from '../ResultsPage'
import './style.scss';

function MainScreen() {
  return (
    <div className="main__screen">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logout' element={<LogoutPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile/:userId' element={<ProfilePage />} />
        <Route path='/results/:searchBar'  element={<ResultsPage />} />
        <Route path='/movies' element={<LibraryPage />} />
        <Route path='/series' element={<LibraryPage/>} />
        <Route path='/books' element={<LibraryPage />} />
        <Route path='/video-games' element={<LibraryPage />} />
        <Route path='/contact' element={<div>Contact</div>} />
        <Route path='/about' element={<div>About</div>} />
        <Route path='/legal-notice' element={<div>Legal notice</div>} />
      </Routes>
    </div>
  );
}

MainScreen.propTypes = {

};

export default MainScreen;
