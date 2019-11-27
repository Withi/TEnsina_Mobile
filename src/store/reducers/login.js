import {Constants} from '../../constants';

const initialState = {
  newValue: '',
};
export const login = (state = initialState, action) => {
  switch (action.type) {
    case Constants.login.teste:
      return {
        ...state,
        newValue: action.newValue,
      };
    default:
      return state;
  }
};
