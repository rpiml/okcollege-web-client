import { take, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {SUBMIT_PAGE} from './constants';
import { nextPage } from './actions';
import 'isomorphic-fetch';

// Individual exports for testing
export function* submitSurvey() {
  while (true) {
    yield take(SUBMIT_PAGE);
    let state = yield select(state => state.toJS());
    let request = { userid: state.userid, survey: state.survey };
    yield call(fetch, "/api/survey", {
      method: "POST",
      body: JSON.stringify(request),
      headers: new Headers({
    		'Content-Type': 'application/json'
    	})
    });
    // TODO indicate an error occurred if one did
    yield put( nextPage() );
  }
}

// All sagas to be loaded
export default [
  submitSurvey,
];
