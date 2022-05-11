/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import './style.scss';

function RegisterPage() {
  const handleSubmit = () => {
    console.log('Je veux m\'enregistrer');
  }

  return (
    <div className="registerPage">
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#ccc', padding: '2em' }}>
        <div style={{ display: 'flex', columnGap: '1em' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname" />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div style={{ display: 'flex', columnGap: '1em' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="year">Year</label>
            <input type="number" id="year" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="month">Month</label>
            <input type="number" id="month" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="day">Day</label>
            <input type="number" id="day" />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div style={{ display: 'flex', columnGap: '1em' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="password1">Password</label>
            <input type="text" id="password1" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="password2">Confirm</label>
            <input type="text" id="password2" />
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

RegisterPage.propTypes = {
  
};

export default RegisterPage;
