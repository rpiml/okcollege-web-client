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

const initialState = fromJS({survey});


function surveyReducer(state = initialState, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        survey: {
          ...state.survey,
          pages: state.survey.pages.map(page => {
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
      };
      // return Object.assign({}, state, {
      //   pages: stage.pages.map(page => Object.assign()
      //   });
      // });
      // return Object.assign({}, state, {
      //     pages: state.pages.map(page => {
      //       return Object.assign({}, page, {
      //         questions: page.questions.map(question => {
      //           return {};
      //           // if (question.id === action.questionId){
      //           //   // return {...question, answer: action.answer};
      //           //   return Object.assign({}, question, { answer: action.answer });
      //           // }else{
      //           //   return question;
      //           // }
      //
      //         });
      //       });
      //     })
      //   });
    default:
      return state;
  }
}

export default surveyReducer;
