import { TOGGLE_EDIT_PROFILE } from "../actions/profile";

const initialState = {
  edit: false,
  username: '',
  firstname: '',
  lastname: '',
  age: '',
  gender: '',
  email: '',
  lastPassword: '',
  newPassword1: '',
  newPassword2: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_EDIT_PROFILE: {
      return {
        ...state,
        edit: !state.edit,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;