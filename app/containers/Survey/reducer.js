/* @flow */
/*
 *
 * Survey reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ANSWER_QUESTION,
  NEXT_PAGE
} from './constants';

import survey from '../../../assets/form.json';

const initialState = fromJS({survey, currentPage: survey.firstPage});


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

    case NEXT_PAGE:
      let jsState = state.toJS();
      let currentPage = jsState.survey.pages.find(page => {
        return page.id == jsState.currentPage;
      })

      try{
        let nextPage = currentPage.next.find(page => {
          currentPage.questions.forEach(question => {
            page.condition = page.condition.replace(question.id, String(question.answer));
          })
          return eval(page.condition);
        });
        return state.set('currentPage', nextPage.page);
      }
      catch(err) {
        // TODO: Log the error
        return state;
       }

    default:
      return state;
  }
}

export default surveyReducer;
