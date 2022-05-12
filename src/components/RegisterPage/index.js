/* eslint-disable react/prop-types */

import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputValueRegister } from '../../actions/register';
import './style.scss';

function RegisterPage() {
  const dispatch = useDispatch();

  const { firstname, lastname, username, bYear, bMonth, bDay, email, password1, password2 } =  useSelector((state) => state.register);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Je veux m\'enregistrer');

    try {
      const response = await axios.post('https://collectio-app.herokuapp.com/api/register', {
        email: email,
        username: username,
        password: password1,
        firstName: firstname,
        lastName: lastname,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const dataTemp = {
    years: ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972"],
    months: [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ],
    days: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
  }

  return (
    <div className="registerPage">
      <form className="registerPage__form" onSubmit={handleSubmit}>
        <h2 className="registerPage__title">Sign Up</h2>
        <fieldset className="registerPage__form-fieldset">
          <div className="registerPage__form-fieldset-container">
            <label className="registerPage__form-fieldset-container-label" htmlFor="registerPage-firstname">Firstname</label>
            <input
              className="registerPage__form-fieldset-container-input"
              type="text"
              id="registerPage-firstname"
              value={firstname}
              onChange={(event) => dispatch(changeInputValueRegister("firstname", event.target.value))}
              autoComplete="name"
            />
          </div>
          <div className="registerPage__form-fieldset-container">
            <label className="registerPage__form-fieldset-container-label" htmlFor="registerPage-lastname">Lastname</label>
            <input
              className="registerPage__form-fieldset-container-input"
              type="text"
              id="registerPage-lastname"
              value={lastname}
              onChange={(event) => dispatch(changeInputValueRegister("lastname", event.target.value))}
              autoComplete="family-name"
            />
          </div>
        </fieldset>
        <fieldset className="registerPage__form-fieldset">
          <div className="registerPage__form-fieldset-container">
            <label className="registerPage__form-fieldset-container-label" htmlFor="registerPage-username">Username</label>
            <input 
              className="registerPage__form-fieldset-container-input"
              type="text"
              id="registerPage-username"
              value={username}
              onChange={(event) => dispatch(changeInputValueRegister("username", event.target.value))}
              autoComplete="username"
            />
          </div>
        </fieldset>
        <fieldset className="registerPage__form-fieldset">
          <div className="registerPage__form-fieldset-container">
            <label className="registerPage__form-fieldset-container-label" htmlFor="registerPage-bYear">Year</label>
            <select
              className="registerPage__form-fieldset-container-input"
              id="registerPage-bYear"
              value={bYear}
              onChange={(event) => dispatch(changeInputValueRegister("bYear", event.target.value))}
            >
              <option value={null} hidden></option>
              {dataTemp.years.map((year) => (
                <option key={year} value={year.toLowerCase()}>{year}</option>
              ))}
            </select>
          </div>
          <div className="registerPage__form-fieldset-container">
            <label className="registerPage__form-fieldset-container-label" htmlFor="registerPage-bMonth">Month</label>
            <select
              className="registerPage__form-fieldset-container-input"
              id="registerPage-bMonth"
              value={bMonth}
              onChange={(event) => dispatch(changeInputValueRegister("bMonth", event.target.value))}
            >
              <option value={null} hidden></option>
              {dataTemp.months.map((month) => (
                <option key={month} value={month.toLowerCase()}>{month}</option>
              ))}
            </select>
          </div>
          <div className="registerPage__form-fieldset-container">
            <label className="registerPage__form-fieldset-container-label" htmlFor="registerPage-bDay">Day</label>
            <select
              className="registerPage__form-fieldset-container-input"
              id="registerPage-bDay"
              value={bDay}
              onChange={(event) => dispatch(changeInputValueRegister("bDay", event.target.value))}
            >
              <option value={null} hidden></option>
              {dataTemp.days.map((day) => (
                <option key={day} value={day.toLowerCase()}>{day}</option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset className="registerPage__form-fieldset">
          <div className="registerPage__form-fieldset-container">
            <label className="registerPage__form-fieldset-container-label" htmlFor="registerPage-email">Email</label>
            <input
              className="registerPage__form-fieldset-container-input"
              type="email" id="registerPage-email"
              value={email}
              onChange={(event) => dispatch(changeInputValueRegister("email", event.target.value))}
              autoComplete="email"
            />
          </div>
        </fieldset>
        <fieldset className="registerPage__form-fieldset">
          <div className="registerPage__form-fieldset-container">
            <label className="registerPage__form-fieldset-container-label" htmlFor="registerPage-password1">Password</label>
            <input
              className="registerPage__form-fieldset-container-input"
              type="password" id="registerPage-password1"
              value={password1}
              onChange={(event) => dispatch(changeInputValueRegister("password1", event.target.value))}
              autoComplete="new-password"
            />
          </div>
          <div className="registerPage__form-fieldset-container">
            <label className="registerPage__form-fieldset-container-label" htmlFor="registerPage-password2">Confirm</label>
            <input
              className="registerPage__form-fieldset-container-input"
              type="password" id="registerPage-password2"
              value={password2}
              onChange={(event) => dispatch(changeInputValueRegister("password2", event.target.value))}
              autoComplete="new-password"
            />
          </div>
        </fieldset>
        <button className="registerPage__form-submit" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

RegisterPage.propTypes = {
  
};

export default RegisterPage;
