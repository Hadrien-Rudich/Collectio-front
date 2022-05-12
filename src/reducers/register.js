import { CHANGE_INPUT_VALUE_REGISTER } from "../actions/register";

const initialState = {
  firstname: '',
  lastname: '',
  username: '',
  bYear: '',
  bMonth: '',
  bDay: '',
  email: '',
  password1: '',
  password2: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_REGISTER: {
      return {
        ...state,
        [action.stateName]: action.value,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;