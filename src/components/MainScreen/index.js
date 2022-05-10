import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import RegisterPage from '../RegisterPage';
import './style.scss';

function MainScreen() {
  return (
    <div className="main__screen">
      <Routes>
        <Route path='/' element={<HomePage />} />
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
