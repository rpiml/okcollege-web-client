// @flow
import { take, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SIGNUP_REQUEST } from './constants';
import { setAuthToken, loginError } from '../../auth/actions';
import { loadState } from '../../utils/localStorage';
import { signupError } from './actions';

// The login sagas are in /app/auth

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export function localSignup(payload) {
  return fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response =>
      response.json().then(json => ({ json, response }))
      // res.cookie('myBearerToken', token);
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' })
    );
}


export function* handleSignupRequest() {
  while (true) {
      // wait for a login submit
    let { payload } = yield take(SIGNUP_REQUEST);
    const savedStated = yield call(loadState);
    if (savedStated && savedStated.survey) {
      payload = { ...payload,
        surveyId: savedStated.survey.survey.id };
    }
      // Endpoint to login
    const response = yield call(localSignup, payload);
    if (!response.response) {
      yield put(signupError(response.error));
    } else {
      document.cookie = `access_token=${response.response.token}`;
      yield put(setAuthToken(response));
      yield put(push('/'));
    }
  }
}

// All sagas to be loaded
export default [
  handleSignupRequest,
];
