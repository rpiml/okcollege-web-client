/*
 *
 * ResultsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  hasResults: true,
  rankings: [
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
  ]
});

function resultsPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default resultsPageReducer;
