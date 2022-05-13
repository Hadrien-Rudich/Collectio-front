import { LOGOUT } from "../actions/login";
import { SAVE_USER_DATA } from "../actions/user";

const initialState = {
  auth: localStorage.getItem('token') ? true : false,
  userId: undefined,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_DATA: {
      return {
        ...state,
        auth: true,
        userId: action.userId,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        auth: false,
        userId: undefined,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;