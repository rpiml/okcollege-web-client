import expect from 'expect';
import loginPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('loginPageReducer', () => {
  it('returns the initial state', () => {
    expect(loginPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
