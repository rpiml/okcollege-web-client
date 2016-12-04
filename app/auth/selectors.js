import { createSelector } from 'reselect';

/**
 * Direct selector to the auth domain
 */

const getAuthDomain = () => state => state.get('auth');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Survey
 */

const selectAuth = () => createSelector(
  getAuthDomain(),
  (substate) => substate.toJS()
);

export default selectAuth;
export {
  getAuthDomain,
};
