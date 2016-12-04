/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_EMAIL,
    CHANGE_PASS,
    CHANGE_FIRSTNAME,
    CHANGE_LASTNAME,
    CHANGE_TO_SIGNUP,
    CHANGE_TO_LOGIN,
    SUBMIT_CREDENTIALS,
    SIGNUP_REQUEST
} from './constants';

export function changeUserEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email: email
  }
}

export function changeUserPass(pass) {
  return {
    type: CHANGE_PASS,
    pass: pass
  }
}
export function changeUserFirstName(name) {
  return {
    type: CHANGE_FIRSTNAME,
    name: name
  }
}
export function changeUserLastName(name) {
  return {
    type: CHANGE_LASTNAME,
    name: name
  }
}

export function changeSignupToLogin() {
  return {
    type: CHANGE_TO_LOGIN
  }
}

export function changeLoginToSignup() {
  return {
    type: CHANGE_TO_SIGNUP
  }
}

export function userClickedSubmit() {
  return {
    type: SUBMIT_CREDENTIALS
  }
}

export function signupRequest(data) {
  return {
    type: SIGNUP_REQUEST,
    payload: data
  }
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
