import {
  SET_STORAGE,
  SET_DURATION,
  SET_PAYMENT,
  SET_USER_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_ADDRESS,
  SET_CARD_INFO,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  storage: 5,
  duration: 12,
  payment: 'No',
  userEmail: '',
  firstName: '',
  lastName: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipcode: '',
  },
  cardInfo: {
    cardNumber: '',
    expireDate: '',
    securityCode: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STORAGE:
      return {
        ...state,
        storage: action.payload,
      };
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_CARD_INFO:
      return {
        ...state,
        cardInfo: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
