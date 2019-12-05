import axios from 'axios';

import * as API from '../api';
import {
  GET_SUBS_ALL,
  GET_SUB_BY_ID,
  CREATED_SUB,
  DELETE_SUB,
  UPDATED_SUB,
  LOADING_START,
  LOADING_COMPLETE,
  API_ERROR,
  SET_TAB_VALUE,
  SET_DURATION,
  SET_STORAGE,
  SET_PAYMENT,
  SET_USER_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_ADDRESS,
  SET_CARD_INFO,
} from './actionTypes';

const loadingStart = () => ({
  type: LOADING_START,
});

const loadingComplete = () => ({
  type: LOADING_COMPLETE,
});

export const getSubsAll = (id) => (dispatch) => {
  const subId = id || '';
  dispatch(loadingStart());
  axios
    .get(`${API.subscriptionUrl}/${subId}`)
    .then((res) => {
      if (subId) {
        dispatch({ type: GET_SUB_BY_ID, payload: res.data.result });
      } else {
        dispatch({ type: GET_SUBS_ALL, payload: res.data.result });
      }
    })
    .catch((err) => {
      dispatch({ type: API_ERROR, payload: err.response });
    })
    .finally(() => {
      dispatch(loadingComplete());
    });
};

export const deleteSubById = (id) => (dispatch) => {
  dispatch(loadingStart());
  axios
    .delete(`${API.subscriptionUrl}/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_SUB, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: API_ERROR, payload: err.response });
    })
    .finally(() => {
      dispatch(loadingComplete());
    });
};

export const createSub = (postData, callback) => (dispatch) => {
  dispatch(loadingStart());
  axios
    .post(API.subscriptionUrl, postData)
    .then((res) => {
      dispatch({ type: CREATED_SUB, payload: res.data });
      callback('/');
    })
    .catch((err) => {
      dispatch({ type: API_ERROR, payload: err.response });
    })
    .finally(() => {
      dispatch(loadingComplete());
    });
};

export const updateSub = ({ id, postData, callback }) => (dispatch) => {
  dispatch(loadingStart());
  axios
    .put(`${API.subscriptionUrl}/${id}`, postData)
    .then((res) => {
      dispatch({ type: UPDATED_SUB, payload: res.data });
      callback('/');
    })
    .catch((err) => {
      dispatch({ type: API_ERROR, payload: err.response });
    })
    .finally(() => {
      dispatch(loadingComplete());
    });
};

export const setTabValue = (tabValue) => (dispatch) => {
  dispatch({ type: SET_TAB_VALUE, payload: tabValue });
};

export const setDuration = (duration) => (dispatch) =>
  dispatch({ type: SET_DURATION, payload: duration });

export const setStorage = (storage) => (dispatch) => {
  dispatch({
    type: SET_STORAGE,
    payload: storage,
  });
};

export const setPayment = (payment) => (dispatch) => {
  dispatch({
    type: SET_PAYMENT,
    payload: payment,
  });
};

export const setUserEmail = (userEmail) => (dispatch) => {
  dispatch({ type: SET_USER_EMAIL, payload: userEmail });
};

export const setFirstName = (firstName) => (dispatch) => {
  dispatch({ type: SET_FIRST_NAME, payload: firstName });
};

export const setLastName = (lastName) => (dispatch) => {
  dispatch({ type: SET_LAST_NAME, payload: lastName });
};

export const setAddress = (address) => (dispatch) => {
  dispatch({ type: SET_ADDRESS, payload: address });
};

export const setCardInfo = (cardInfo) => (dispatch) => {
  dispatch({ type: SET_CARD_INFO, payload: cardInfo });
};
