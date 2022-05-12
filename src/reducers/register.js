import { CHANGE_INPUT_VALUE_REGISTER } from "../actions/global";

const initialState = {
  firstname: 'Jean',
  lastname: 'Claude',
  username: 'JC',
  bYear: '1972',
  bMonth: 'june',
  bDay: '29',
  email: 'jean.claude@yahoo.xyz',
  password1: 'jeanC',
  password2: 'jeanC',
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