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

      // If currentPage.next is a string, go to that page
      if(typeof currentPage.next === 'string' || currentPage.next instanceof String){
        return state.set('currentPage', currentPage.next);
      }

      // Else, currentPage.next is an array of conditions with pages
      try{
        let nextPage = currentPage.next.find(page => {
          currentPage.questions.forEach(question => {
            page.condition = page.condition.replace(question.id, String(question.answer));
          })
          return eval(page.condition);
        });
        if(nextPage === undefined){
          throw `ERROR: No conditions satisfied on page: ${currentPage.id}`
        }
        return state.set('currentPage', nextPage.page);
      }
      catch(err) {
        console.error(`Error setting next page with conditional on page: ${currentPage.id}`, err);
        return state;
       }

    default:
      return state;
  }
}

export default surveyReducer;
