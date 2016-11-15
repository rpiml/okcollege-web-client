import expect from 'expect';
import resultsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('resultsPageReducer', () => {
  it('returns the initial state', () => {
    expect(resultsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
