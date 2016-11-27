/*
 *
 * Auth actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_AUTH_TOKEN,
  LOGIN_ERROR,
  LOGOUT,
} from './constants';


// Triggered whenever a login is submitted
export function loginRequest(data){
    return {
        type: LOGIN_REQUEST,
        payload: data
    };
}

export function setAuthToken(response){
    return {
        type: SET_AUTH_TOKEN,
        payload: response.response
    };
}

// triggered when the login has succeded
export function loginSuccess(data){
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
}

// triggered when the login failed
export function loginError(errors){
    return {
        type: LOGIN_ERROR,
        error: true,
        payload: errors
    };
}

// triggered to logout the user
export function logout(){
    return {
        type: LOGOUT
    };
}
