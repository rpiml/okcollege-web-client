import expect from 'expect';
import surveyReducer from '../reducer';
import { fromJS } from 'immutable';
import { answerQuestion, nextPage } from '../actions';

describe('surveyReducer', () => {
  // it('returns the initial state', () => {
  //   expect(surveyReducer(undefined, {})).toEqual(fromJS({}));
  // });

  const singlePageSurvey = fromJS({
    "currentPage": "start",
    "survey": {
      "firstPage": "start",
      "pages": [{
          "id": "start",
          "questions": [{
            "id": "years-in-college",
            "question": "How many years have you been in college?",
            "type": "slider",
            "range": [0,5]
          }],
          "next": [{
            "condition": "years-in-college === 4",
            "page": "scores"
            }, {
            "condition": "true",
            "page": "done"
            }]
        }
      ]
    }
  });

  it('should modify answers to the survey', () => {
    let action = answerQuestion("years-in-college", 3);
    let modifiedState = surveyReducer(singlePageSurvey, action).toJS();
    expect(modifiedState).toNotBe(null);
    expect(modifiedState.survey.pages[0].questions[0].answer).toEqual(3);
  });

  it('should not modify answers to the survey if the question isn\'t contained', () => {
    let action = answerQuestion("favorite-football-team", "steelers");
    let modifiedState = surveyReducer(singlePageSurvey, action);
    expect(modifiedState).toEqual(singlePageSurvey);
  });

  it('should go to the conditional next page', () => {
    let action = answerQuestion("years-in-college", 4);
    let modifiedStateAction = surveyReducer(singlePageSurvey, action)
    let modifiedStatePage = surveyReducer(modifiedStateAction, nextPage()).toJS();
    expect(modifiedStatePage.currentPage).toEqual("scores");
  });

  it('should go to the default next page', () => {
    let action = answerQuestion("years-in-college", 3);
    let modifiedStateAction = surveyReducer(singlePageSurvey, action);
    let modifiedStatePage = surveyReducer(modifiedStateAction, nextPage()).toJS();
    expect(modifiedStatePage.currentPage).toEqual("done");
  });

});
