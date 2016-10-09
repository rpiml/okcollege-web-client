/**
 * Test  sagas
 */

import expect from 'expect';
// import { take, call, put, select } from 'redux-saga/effects';
import { submitSurvey } from '../sagas';

const generator = submitSurvey();

// describe('submitSurvey Saga', () => {
//   it('Expect to have unit tests specified', () => {
//   });
// });
