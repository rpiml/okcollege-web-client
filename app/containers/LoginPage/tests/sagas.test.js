//@flow
/**
 * Test  sagas
 */

import { expect } from 'chai';
import { take, call, put, select } from 'redux-saga/effects';
import { handleSignupRequest, localSignup } from '../sagas';
import { SIGNUP_REQUEST } from '../constants';
import { LOGIN_ERROR } from '../../../auth/constants';
import { setAuthToken } from '../../../auth/actions';
import { signupError } from '../actions';

const exPayload = {email: "rick@morty.com", password:"morty"};

describe('Test Signup', () => {

  it('should take a signup request', () => {
    const gen = handleSignupRequest();
    expect(gen.next().value).to.deep.equal(take(SIGNUP_REQUEST));
  });

  it('should fail properly', () => {
    const gen = handleSignupRequest();
    gen.next();
    gen.next({payload: exPayload});
    let result = gen.next({
      error: "Failure message"
    });
    expect(result.value).to.deep.equal(put(signupError("Failure message")));
  });

  it('should get access token', () => {
    const gen = handleSignupRequest();
    gen.next();
    gen.next({payload: exPayload});
    let response = {
      response: { token: 'ATOKEN' }
    };
    let result = gen.next(response);
    expect(result.value).to.deep.equal(put(setAuthToken(response)));
  });
});
