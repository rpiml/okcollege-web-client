//@flow
/*
 *
 * ResultsPage actions
 *
 */

import {
  LOADING,
  LOADED,
} from './constants';

export function loaded(rankings: Array<{name: string, ranking:number}>) {
  return {
    type: LOADED,
    rankings
  };
}

export function loadColleges() {
  return {
    type: LOADING
  };
}
