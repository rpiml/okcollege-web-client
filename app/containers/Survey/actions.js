//@flow
/*
 *
 * Survey actions
 *
 */

import {
  ANSWER_QUESTION,
  SUBMIT_PAGE,
  NEXT_PAGE,
  SURVEY_RECEIVED
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

export function predictionReceived(surveyId:string, prediction: Object){
  return {
    type: SURVEY_RECEIVED,
    surveyId, prediction
  };
}
