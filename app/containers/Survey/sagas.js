import { take, call, put, select, delay } from 'redux-saga/effects';
import * as actions from './constants';
import { nextPage } from './actions';
// import 'isomorphic-fetch';

// Individual exports for testing
export function* submitSurvey() {
  while (true) {
    yield take(actions.SUBMIT_PAGE);
    yield delay(1000);
    yield put( nextPage );
  }
}

// All sagas to be loaded
export default [
  submitSurvey,
];
