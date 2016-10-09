import { take, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {SUBMIT_PAGE} from './constants';
import { nextPage } from './actions';
// import 'isomorphic-fetch';

// Individual exports for testing
export function* submitSurvey() {
  while (true) {
    yield take(SUBMIT_PAGE);
    yield delay(1000);
    yield put( nextPage() );
  }
}

// All sagas to be loaded
export default [
  submitSurvey,
];
