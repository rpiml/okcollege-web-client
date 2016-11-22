import {take, put, fork, call} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, SIGNUP_REQUEST, LOGOUT } from './constants';
import {loginRequest, loginError, loginSuccess, setAuthToken} from './actions';
import 'isomorphic-fetch';


// LOGIN_SUBMIT,
// LOGIN_REQUEST,
// LOGIN_SUCCESS,
// LOGIN_ERROR,
// LOGOUT,

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function localLogin(payload) {

  return fetch("/api/auth/local", {
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



export function* handleLoginRequest(){
  while(true){
      // wait for a login submit
      var {payload} = yield take(LOGIN_REQUEST);

      // Endpoint to login
      let response = yield call(localLogin, payload);
      document.cookie = `myBearerToken=${response.response.token}`;
      yield put(setAuthToken(response))
      yield put(push('/'));

      // TODO: Handle Error
  }
}



export default function* saga(){
  yield [fork(handleLoginRequest)];
}
