/**
 * Test  sagas
 */

import expect from 'expect';
// import { take, call, put, select } from 'redux-saga/effects';
import { handleLoginRequest } from '../sagas';

const generator = handleLoginRequest();

describe('handleLoginRequest Saga', () => {
  it('Expect to have unit tests specified', () => {
     expect(true).toEqual(true);

  console.log(generator.next());
  
  //  expect(gen.next()).toEqual({});
 //
 //  assert.deepEqual(
 //    gen.next(),
 //   { done: false, value: ??? },
 //   'incrementAsync should return a Promise that will resolve after 1 second'
 // );


  });
});
