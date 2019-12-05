import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loadingReducers from './loadingReducers';
import subscriptionReducers from './subscriptionReducers';
import createSubReducers from './createSubReducers';
import errorReducers from './errorReducers';
import tabReducers from './tabReducers';

export default combineReducers({
  form: formReducer,
  loadingReducers,
  subscriptionReducers,
  createSubReducers,
  errorReducers,
  tabReducers,
});
