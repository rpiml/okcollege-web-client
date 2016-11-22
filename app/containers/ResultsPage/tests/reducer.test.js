import expect from 'expect';
import resultsPageReducer from '../reducer';
import { fromJS } from 'immutable';
import { loaded } from '../actions';

describe('resultsPageReducer', () => {
  it('returns the initial state', () => {
    expect(resultsPageReducer(undefined, {})).toEqual(fromJS({
      hasResults: false,
      rankings: []
    }));
  });

  it('should update rankings on load', () => {
    const loadAction = loaded([
      {
        name: "Rensselaer Polytechnic Institute",
        ranking: 1
      },
      {
        name: "Massachusetts Institute of Technology",
        ranking: 2
      },
      {
        name: "Stanford University",
        ranking: 3
      }
    ]);

    const newState = resultsPageReducer(
      fromJS({ hasLoaded:false }),
      loadAction).toJS();

    expect(newState.hasResults).toEqual(true);
    expect(newState.rankings[0].ranking).toEqual(1);
    expect(newState.rankings[1].ranking).toEqual(2);
    expect(newState.rankings[2].ranking).toEqual(3);
    expect(newState.rankings[0].name).toEqual("Rensselaer Polytechnic Institute");
  });
});
