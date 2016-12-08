/**
 * Test  sagas
 */

import { expect } from 'chai';
import { take, call, put, select } from 'redux-saga/effects';
import { handleLoginRequest } from '../sagas';
import { loginRequest, loginError, setAuthToken } from '../actions';
import { LOGIN_REQUEST } from '../constants';

const exPayload = {email: "rick@morty.com", password:"morty"};

describe('Test login', () => {

  it('should take a login request', () => {
    const gen = handleLoginRequest();
    expect(gen.next().value).to.deep.equal(take(LOGIN_REQUEST));
  });

  it('should fail properly', () => {
    const gen = handleLoginRequest();
    gen.next();
    gen.next({payload: exPayload});
    let result = gen.next({
      error: "Failure message"
    });
    expect(result.value).to.deep.equal(put(loginError("Failure message")));
  });

  it('should get access token', () => {
    const gen = handleLoginRequest();
    gen.next();
    gen.next({payload: exPayload});1
    let response = {
      response: { token: 'ATOKEN' }
    };
    let result = gen.next(response);
    expect(result.value).to.deep.equal(put(setAuthToken(response)));
  });
});
