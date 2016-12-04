import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOADING } from './constants';
import { loaded } from './actions';


// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function getResults(userId) {

  return fetch(`/api/user/${userId}/results`, {
    method: "GET",
    credentials: 'same-origin',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(response =>
      response.json().then(json => ({ json, response }))
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


// Individual exports for testing
export function* defaultSaga() {
  while(true){
    // wait for a login submit
    let payload = yield take(LOADING);
    let state = yield select(state => state.toJS());
    // Endpoint to login
    let response = yield call(getResults, state.auth.profile.uuid);
    // TODO: fix API to return actual responses
    response = [{name: 'RPI', ranking:1}, {name: 'MIT', ranking:2}, {name: 'CIT', ranking:3}]
    yield put( loaded(response) );
    // TODO: Handle Error
  }

}

// All sagas to be loaded
export default [
  defaultSaga,
];
