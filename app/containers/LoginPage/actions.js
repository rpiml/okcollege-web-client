/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_CREDENTIALS
} from './constants';

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
