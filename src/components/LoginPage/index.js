import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputValueLogin } from '../../actions/login';
import './style.scss';

function LoginPage() {
  const dispatch = useDispatch();

  const { email, password } =  useSelector((state) => state.login);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Je veux me connecter');

    try {
      const response = await axios.post('https://collectio-app.herokuapp.com/api/login', {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="loginPage">
      <form className="loginPage__form" onSubmit={handleSubmit}>
        <h2 className="loginPage__title">Sign In</h2>
        <fieldset className="loginPage__form-fieldset">
          <div className="loginPage__form-fieldset-container">
            <label className="loginPage__form-fieldset-container-label" htmlFor="loginPage-email">Email</label>
            <input
              className="loginPage__form-fieldset-container-input"
              type="email" id="loginPage-email"
              value={email}
              onChange={(event) => dispatch(changeInputValueLogin("email", event.target.value))}
              autoComplete="email"
            />
          </div>
        </fieldset>
        <fieldset className="loginPage__form-fieldset">
          <div className="loginPage__form-fieldset-container">
            <label className="loginPage__form-fieldset-container-label" htmlFor="loginPage-password">Password</label>
            <input
              className="loginPage__form-fieldset-container-input"
              type="password" id="loginPage-password"
              value={password}
              onChange={(event) => dispatch(changeInputValueLogin("password", event.target.value))}
              autoComplete="password"
            />
          </div>
        </fieldset>
        <button className="loginPage__form-submit" type="submit">Sign In</button>
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  
};

export default LoginPage;
