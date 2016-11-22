/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_EMAIL,
    CHANGE_PASS,
    SUBMIT_CREDENTIALS
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

export function userClickedSubmit() {
  return {
    type: SUBMIT_CREDENTIALS
  }
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
