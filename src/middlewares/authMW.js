import axios from "axios";
import { LOGIN, LOGOUT } from "../actions/login";
import { saveUserData } from "../actions/user";

const instance = axios.create({
  baseURL: 'https://collectio-app.herokuapp.com',
});

if (localStorage.getItem('token')) {
  const token = localStorage.getItem('token');
  instance.defaults.headers.common.authorization = `${token}`
}

const authMW = (store) => (next) => async (action) => {
  if (action.type === LOGIN) {
    const state = store.getState();

    try {
      const response = await instance.post('/api/login', {
        email: state.login.email,
        password: state.login.password,
      });
      console.log(response.data);
      store.dispatch(saveUserData(response.data));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      
    } catch (error) {
      console.log(error);
    }
  }
  else if (action.type === LOGOUT) {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
  next(action);
}

export default authMW;