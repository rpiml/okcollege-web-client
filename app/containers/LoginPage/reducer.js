/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SUBMIT_CREDENTIALS,
} from './constants';

const initialState = fromJS({
  isLoggedIn: false,
  email: '',
  password: '',
  isLoading: false
});

function loginPageReducer(state = initialState, action) {
  let oldState = state.toJS();
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SUBMIT_CREDENTIALS:
      return fromJS({
        ...oldState,
        isLoading: true
      })
    default:
      return state;
  }
}

export default loginPageReducer;
