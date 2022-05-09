import { TOGGLE_LOGIN_MODAL } from "../actions/loginModal";

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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