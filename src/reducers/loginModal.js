import { CHANGE_INPUT_VALUE_LOGIN, TOGGLE_LOGIN_MODAL } from "../actions/loginModal";

const initialState = {
  isOpen: false,
  email: '',
  password: ''
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_LOGIN: {
      return {
        ...state,
        [action.stateName]: action.value,
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