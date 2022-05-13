export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserData = ({ userId }) => ({
  type: SAVE_USER_DATA,
  userId,
});