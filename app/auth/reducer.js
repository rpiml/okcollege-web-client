/*
 *
 * Survey reducer
 *
 */

import { fromJS } from 'immutable';
// import { <insert action> } from './actions';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_AUTH_TOKEN,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT,

} from './constants';

const initialState = fromJS({});


function authReducer(state = initialState, action) {
  if(!action) return state;

  let oldState = state.toJS();
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return fromJS({
          token: action.payload.token,
          profile: action.payload.profile,
      });
    default:
      return state;
  }
}

export default authReducer;
