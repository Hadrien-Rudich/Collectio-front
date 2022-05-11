export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';

export const CHANGE_LOGIN_VALUE = 'CHANGE_LOGIN_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';

export const toggleLoginModal = () => ({
  type: TOGGLE_LOGIN_MODAL,
});

export const changeLoginValue = (loginValue) => ({
  type: CHANGE_LOGIN_VALUE,
  loginValue,
});

export const changePasswordValue = (passwordValue) => ({
  type: CHANGE_PASSWORD_VALUE,
  passwordValue,
});
