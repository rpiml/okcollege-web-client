/*
 *
 * Survey reducer
 *
 */

import { fromJS } from 'immutable';
// import { <insert action> } from './actions';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT,

} from './constants';



function authReducer(state = initialState, action) {
  if(!action) return state;

  let oldState = state.toJS();
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload.id;
    case LOGIN_SUCCESS:
      return action.payload.id;
    case LOGIN_SUCCESS:
      return action.payload.id;
    case LOGOUT:
      return fromJS({
        ...oldState,
        token: null
      });
    default:
      return state;
  }
}

export default authReducer;
