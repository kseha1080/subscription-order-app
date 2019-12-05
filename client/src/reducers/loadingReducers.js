import { LOADING_START, LOADING_COMPLETE } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case LOADING_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state
      }
  }
};
