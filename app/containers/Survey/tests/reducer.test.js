import expect from 'expect';
import surveyReducer from '../reducer';
import { fromJS } from 'immutable';
import { answerQuestion } from '../actions';

describe('surveyReducer', () => {
  // it('returns the initial state', () => {
  //   expect(surveyReducer(undefined, {})).toEqual(fromJS({}));
  // });

  const singlePageSurvey = {
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
          "next": "done"
        }
      ]
    }
  };

  it('should modify answers to the survey', () => {
    let modifiedState = surveyReducer(singlePageSurvey, answerQuestion("years-in-college", 3));
    expect(modifiedState).toNotBe(null);
    expect(modifiedState.survey.pages[0].questions[0].answer).toEqual(3);
  });

  it('should not modify answers to the survey if the question isn\'t contained', () => {
    let modifiedState = surveyReducer(singlePageSurvey, answerQuestion("favorite-football-team", "steelers"));
    expect(modifiedState).toEqual(singlePageSurvey);
  });

});
