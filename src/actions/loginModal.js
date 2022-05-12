export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
export const CHANGE_INPUT_VALUE_LOGIN = 'CHANGE_INPUT_VALUE_LOGIN';

export const toggleLoginModal = () => ({
  type: TOGGLE_LOGIN_MODAL,
});

export const changeInputValueLogin = (stateName, value) => ({
  type: CHANGE_INPUT_VALUE_LOGIN,
  stateName,
  value,
});

