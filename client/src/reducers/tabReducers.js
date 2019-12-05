import { SET_TAB_VALUE } from '../actions/actionTypes';

const INITIAL_STATE = {
  tabValue: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TAB_VALUE:
      return {
        ...state,
        tabValue: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
