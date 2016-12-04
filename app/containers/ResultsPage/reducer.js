//@flow
/*
 *
 * ResultsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOADED
} from './constants';

const initialState = fromJS({
  hasResults: false,
  rankings: []
});

function resultsPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOADED:
      return fromJS({
        ...state,
        hasResults: true,
        rankings: action.rankings
      });
    default:
      return state;
  }
}

export default resultsPageReducer;
