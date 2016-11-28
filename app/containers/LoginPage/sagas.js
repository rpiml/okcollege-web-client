import {take, put, fork, call} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SIGNUP_REQUEST } from './constants';
import { setAuthToken } from '../../auth/actions';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function localSignup(payload) {

  return fetch("/api/user", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(response =>
      response.json().then(json => ({ json, response }))
      // res.cookie('myBearerToken', token);
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json;
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    )
}


export function* handleSignupRequest(){
  while(true){
      // wait for a login submit
      var {payload} = yield take(SIGNUP_REQUEST);

      // Endpoint to login
      let response = yield call(localSignup,payload);
      document.cookie = `access_token=${response.response.token}`;
      yield put(setAuthToken(response))
      yield put(push('/'));

      // TODO: Handle Error
  }
}

// All sagas to be loaded
export default [
  handleSignupRequest,
];
