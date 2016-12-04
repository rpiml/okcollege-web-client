/**
 * Test  sagas
 */

import expect from 'expect';
// import { take, call, put, select } from 'redux-saga/effects';
import { handleLoginRequest } from '../sagas';

const generator = handleLoginRequest();

describe('handleLoginRequest Saga', () => {
  // TODO
});
