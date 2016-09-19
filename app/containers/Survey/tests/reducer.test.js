import expect from 'expect';
import surveyReducer from '../reducer';
import { fromJS } from 'immutable';

describe('surveyReducer', () => {
  it('returns the initial state', () => {
    expect(surveyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
