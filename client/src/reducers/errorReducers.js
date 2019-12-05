import { API_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  apiError: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_ERROR:
      return {
        ...state,
        apiError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
