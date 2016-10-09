/*
 *
 * Survey actions
 *
 */

import {
  ANSWER_QUESTION,
} from './constants';

export function answerQuestion(questionId, answer) {
  return {
    type: ANSWER_QUESTION,
    questionId,
    answer
  };
}
