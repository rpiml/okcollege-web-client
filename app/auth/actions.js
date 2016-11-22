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
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
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
        type: LOGIN_REQUEST,
        payload: response
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

// Triggered whenever a login is submitted
export function signupRequest(data){
    return {
        type: SIGNUP_REQUEST,
        payload: data
    };
}

// triggered when the signup has succeded
export function signupSuccess(data){
    return {
        type: SIGNUP_SUCCESS,
        payload: data
    };
}

// triggered when the signup failed
export function signupError(errors){
    return {
        type: SIGNUP_ERROR,
        error: true,
        payload: errors
    };
}
