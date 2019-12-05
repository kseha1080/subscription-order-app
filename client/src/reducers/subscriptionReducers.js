import {
  GET_SUBS_ALL,
  GET_SUB_BY_ID,
  CREATED_SUB,
  UPDATED_SUB,
  DELETE_SUB,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  subsList: [],
  deleteSub: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SUBS_ALL:
      return {
        ...state,
        subsList: action.payload,
      };
    case GET_SUB_BY_ID:
      return {
        ...state,
        subById: action.payload,
      };
    case CREATED_SUB:
      return {
        ...state,
        createdSub: action.payload,
      };
    case UPDATED_SUB:
      return {
        ...state,
        updatedSub: action.payload,
      };
    case DELETE_SUB:
      return {
        ...state,
        deleteSub: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
