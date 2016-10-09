/* @flow */
/*
 *
 * Survey reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ANSWER_QUESTION,
} from './constants';

import survey from '../../../assets/form.json';

const initialState = fromJS({survey, currentPage: 'start'});


function surveyReducer(state = initialState, action) {
  let oldState = state.toJS();
  switch (action.type) {
    case ANSWER_QUESTION:
      return fromJS({
        ...oldState,
        survey: {
          ...oldState.survey,
          pages: oldState.survey.pages.map(page => {
            return {
              ...page,
              questions: page.questions.map(question => {
                if (question.id == action.questionId){
                  return {...question, answer: action.answer};
                }else{
                  return question;
                }
              })
            };
          })
        }
      });
    default:
      return state;
  }
}

export default surveyReducer;
