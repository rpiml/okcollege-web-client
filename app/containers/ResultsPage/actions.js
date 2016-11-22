//@flow
/*
 *
 * ResultsPage actions
 *
 */

import {
  LOADED,
} from './constants';

export function loaded(rankings: Array<{name: string, ranking:number}>) {
  return {
    type: LOADED,
    rankings
  };
}
