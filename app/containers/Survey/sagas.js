//@flow
import { take, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {SUBMIT_PAGE} from './constants';
import { nextPage, predictionReceived } from './actions';
import { loaded as resultsLoaded } from '../ResultsPage/actions';
import 'isomorphic-fetch';

// Individual exports for testing
export function* submitSurvey() {
  while (true) {
    yield take(SUBMIT_PAGE);
    let state = yield select(state => state.toJS());
    let request = { userid: state.userid, survey: state.survey };
    let result = yield call(fetch, "/api/survey", {
      method: "POST",
      body: JSON.stringify(request),
      headers: new Headers({
    		'Content-Type': 'application/json'
    	})
    });

    let resultJSON = yield result.json();

    yield put(predictionReceived(resultJSON.survey_id, resultJSON.prediction));
    yield put(resultsLoaded(resultJSON.prediction.colleges));

    // TODO indicate an error occurred if one did
    yield put( nextPage() );
  }
}

// All sagas to be loaded
export default [
  submitSurvey,
];
