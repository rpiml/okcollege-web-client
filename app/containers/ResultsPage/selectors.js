import { createSelector } from 'reselect';

/**
 * Direct selector to the resultsPage state domain
 */
const selectResultsPageDomain = () => state => state.get('resultsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ResultsPage
 */

const selectResultsPage = () => createSelector(
  selectResultsPageDomain(),
  (substate) => substate.toJS()
);

export default selectResultsPage;
export {
  selectResultsPageDomain,
};
