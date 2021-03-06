//@flow
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
  CHANGE_FIRSTNAME,
  CHANGE_LASTNAME,
  CHANGE_TO_SIGNUP,
  CHANGE_TO_LOGIN,
  SIGNUP_ERROR,
  SUBMIT_CREDENTIALS,
} from './constants';

import {
  LOGIN_ERROR
} from '../../auth/constants';

const initialState = fromJS({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  isSigningUp: false
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
    case CHANGE_FIRSTNAME:
      return fromJS({
        ...oldState,
        firstName: action.name
      })
    case CHANGE_LASTNAME:
      return fromJS({
        ...oldState,
        lastName: action.name
      })
    case CHANGE_TO_SIGNUP:
      return fromJS({
        ...oldState,
        isSigningUp: true
      })
    case CHANGE_TO_LOGIN:
      return fromJS({
        ...oldState,
        isSigningUp: false
      })
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      return fromJS({
        ...oldState,
        error: true,
        errorMessage: action.payload
      })
    default:
      return state;
  }
}

export default loginPageReducer;
