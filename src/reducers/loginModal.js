import { CHANGE_LOGIN_VALUE, CHANGE_PASSWORD_VALUE, TOGGLE_LOGIN_MODAL } from "../actions/loginModal";

const initialState = {
  isOpen: false,
  email: '',
  password: ''
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_VALUE: {
      return {
        ...state,
        email: action.loginValue,
      }
    }

    case CHANGE_PASSWORD_VALUE: {
      return {
        ...state,
        password: action.passwordValue,
      }
    }

    case TOGGLE_LOGIN_MODAL: {
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;