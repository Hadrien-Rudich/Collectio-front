export const CHANGE_INPUT_VALUE_LOGIN = 'CHANGE_INPUT_VALUE_LOGIN';

export const changeInputValueLogin = (stateName, value) => ({
  type: CHANGE_INPUT_VALUE_LOGIN,
  stateName,
  value,
});
