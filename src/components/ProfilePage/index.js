/* eslint-disable react/prop-types */
import { FaEdit, FaTimes, FaSave } from 'react-icons/fa';

import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditProfile } from '../../actions/profile';
import { useEffect } from 'react';
import axios from 'axios';

function ProfilePage() {
  const disptach = useDispatch();
  const { userId } = useParams();

  const { edit } = useSelector((state) => state.profile);

  useEffect(() => {
    console.log({edit});
  }, [edit]);

  const handleEdit = () => {
    console.log('Je veux editer mon profil');
    disptach(toggleEditProfile());
  };

  const handleCancelEdit = () => {
    console.log('Je ne veux plus editer mon profil');
    disptach(toggleEditProfile());
  }

  const handleSubmitChangeProfile = async () => {
    console.log('Je veux envoyer les nouvelles données');
    try {
      const response = await axios.patch(`https://collectio-app.herokuapp.com/api/profile/${localStorage.getItem('userId')}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="profilePage">
      <h2 className="profilePage-title">{localStorage.getItem("userId") && localStorage.getItem("userId") === userId ? 'My profile' : 'Profile'}</h2>
      <div className="profilePage__user">
        <div className="profilePage__user-avatarContainer">
          {edit ? (
            <input style={{ width: '100%' }} type="file" accept="image/png, image/jpeg" />
          ): (
            <img className="profilePage__user-avatarContainer-avatar" src="https://www.melty.fr/wp-content/uploads/meltyfr/2021/10/media-2151.jpg" alt="" />
          )}
        </div>
        <div className="profilePage__user-informations">
          <div className="profilePage__user-informations-public">
            <div className="profilePage__user-informations-container">
              <fieldset className="profilePage__user-informations-container-fieldset">
                <label className="profilePage__user-informations-container-fieldset-label" htmlFor="username">Username</label>
                {edit ? (
                  <input type="text" className="profilePage__user-informations-container-fieldset-input" placeholder='LeoChenot' />
                ) : (
                  <span className="profilePage__user-informations-container-fieldset-value">LeoChenot</span>
                )}
              </fieldset>
            </div>
            <div className="profilePage__user-informations-container">
              <fieldset className="profilePage__user-informations-container-fieldset">
                <label className="profilePage__user-informations-container-fieldset-label" htmlFor="firstname">Firstname</label>
                {edit ? (
                  <input type="text" className="profilePage__user-informations-container-fieldset-input" placeholder='Léo' />
                ) : (
                  <span className="profilePage__user-informations-container-fieldset-value">Léo</span>
                )}
              </fieldset>
            <fieldset className="profilePage__user-informations-container-fieldset">
              <label className="profilePage__user-informations-container-fieldset-label" htmlFor="lastname">Lastname</label>
              {edit ? (
                <input type="text" className="profilePage__user-informations-container-fieldset-input" placeholder='Chenot' />
              ) : (
                <span className="profilePage__user-informations-container-fieldset-value">Chenot</span>
              )}
            </fieldset>
            </div>
            <div className="profilePage__user-informations-container">
              <fieldset className="profilePage__user-informations-container-fieldset">
                <label className="profilePage__user-informations-container-fieldset-label" htmlFor="age">Age</label>
                {edit ? (
                  <input type="text" className="profilePage__user-informations-container-fieldset-input" placeholder='18' />
                ) : (
                  <span className="profilePage__user-informations-container-fieldset-value">18</span>
                )}
              </fieldset>
              <fieldset className="profilePage__user-informations-container-fieldset">
                <label className="profilePage__user-informations-container-fieldset-label" htmlFor="gender">Gender</label>
                {edit ? (
                  <input type="text" className="profilePage__user-informations-container-fieldset-input" placeholder='Man' />
                ) : (
                  <span className="profilePage__user-informations-container-fieldset-value">Man</span>
                )}
              </fieldset>
            </div>
          </div>
          {(localStorage.getItem("userId") && localStorage.getItem("userId") === userId) && <div className="profilePage__user-informations-private">
            <div className="profilePage__user-informations-container">
              <fieldset className="profilePage__user-informations-container-fieldset">
                <label className="profilePage__user-informations-container-fieldset-label" htmlFor="email">Email</label>
                {edit ? (
                  <input type="email" className="profilePage__user-informations-container-fieldset-input" placeholder='leochenot1@gmail.com' />
                ) : (
                  <span className="profilePage__user-informations-container-fieldset-value">leochenot1@gmail.com</span>
                )}
              </fieldset>
            </div>
            {edit && (
              <div className="profilePage__user-informations-container">
                <fieldset className="profilePage__user-informations-container-fieldset">
                  <label className="profilePage__user-informations-container-fieldset-label" htmlFor="password1">Last Password</label>
                  <input type="password" className="profilePage__user-informations-container-fieldset-input" placeholder='••••••••' autoComplete='new-password' />
                </fieldset>
              </div>
            )}
            {edit && (
              <div className="profilePage__user-informations-container">
                <fieldset className="profilePage__user-informations-container-fieldset">
                  <label className="profilePage__user-informations-container-fieldset-label" htmlFor="password1">New Password</label>
                  <input type="password" className="profilePage__user-informations-container-fieldset-input" placeholder='••••••••' autoComplete='new-password' />
                </fieldset>
                <fieldset className="profilePage__user-informations-container-fieldset">
                  <label className="profilePage__user-informations-container-fieldset-label" htmlFor="password1">Confirm</label>
                  <input type="password" className="profilePage__user-informations-container-fieldset-input" placeholder='••••••••' autoComplete='new-password' />
                </fieldset>
              </div>
            )}
          </div>}
        </div>
        {localStorage.getItem("userId") && localStorage.getItem("userId") === userId && (
          <div style={{ marginLeft: 'auto' }}>
            {edit ? (
              <div>
                <button className="profilePage__user-editButton" type="button" onClick={handleEdit}>Cancel <FaTimes /></button>
                <button className="profilePage__user-editButton" type="button" onClick={handleEdit}>Save <FaSave /></button>
              </div>
            ) : (
              <button className="profilePage__user-editButton" type="button" onClick={handleEdit}>Edit <FaEdit /></button>
            )}
          </div>
        )}
      </div>
      <h2 className="profilePage-title" style={{ marginTop: '1em' }}>Categories</h2>
      <div className="profilePage__categories">
        <Link
          to="/movies"
          className="profilePage__categories-item"
        >
          <span className="profilePage__categories-item-name">Movies</span>
          <span className="profilePage__categories-item-number">86</span>
        </Link>
        <Link
          to="/series"
          className="profilePage__categories-item"
        >
          <span className="profilePage__categories-item-name">Series</span>
          <span className="profilePage__categories-item-number">23</span>
        </Link>
        <Link
          to="/books"
          className="profilePage__categories-item"
        >
          <span className="profilePage__categories-item-name">Books</span>
          <span className="profilePage__categories-item-number">0</span>
        </Link>
        <Link
          to="/video-games"
          className="profilePage__categories-item"
        >
          <span className="profilePage__categories-item-name">Video games</span>
          <span className="profilePage__categories-item-number">10</span>
        </Link>
      </div>
    </div>
  );
}

ProfilePage.propTypes = {
  
};

export default ProfilePage;
