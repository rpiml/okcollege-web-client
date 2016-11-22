/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
    CHANGE_EMAIL,
    CHANGE_PASS,
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
    case CHANGE_EMAIL:
      return fromJS({
        ...oldState,
        email: action.email
      })
    case CHANGE_PASS:
      return fromJS({
        ...oldState,
        password: action.pass
      })
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
