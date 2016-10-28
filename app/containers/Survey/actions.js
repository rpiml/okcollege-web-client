/*
 *
 * Survey actions
 *
 */

import {
  ANSWER_QUESTION,
  SUBMIT_PAGE,
  NEXT_PAGE
} from './constants';

export function answerQuestion(questionId, answer) {
  return {
    type: ANSWER_QUESTION,
    questionId,
    answer
  };
}

export function userClickedSubmit() {
  return {
    type: SUBMIT_PAGE
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE
  };
}
