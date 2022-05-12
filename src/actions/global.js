export const CHANGE_INPUT_VALUE_REGISTER = 'CHANGE_INPUT_VALUE_REGISTER';

export const changeInputValueRegister = (stateName, value) => ({
  type: CHANGE_INPUT_VALUE_REGISTER,
  stateName: stateName,
  value,
});

