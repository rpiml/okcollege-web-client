/**
*
* FormComponent
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Slider from 'components/Slider';
import MultiChoice from 'components/MultiChoice';
import Choice from 'components/Choice';
import styles from './styles.css';

import survey from '../../../assets/form.json';

// Choose pageQuestion
const surveyPageReducer = (pageId = survey.firstPage) => {
  let page ={next:survey.firstPage};
  let pages = [];
  while(page.next != 'done') {
    page = survey.pages.find(pg => pg.id == page.next);
    pages.push(page.questions.map(question => selectQuestionType(question)));
  }
  // console.log(pages);
  return (
    <div>
      {pages.map(page => page)}
    </div>
  )
}

const selectQuestionType = (question) => {
  switch (question.type) {
    case 'slider':
      return <Slider key={question.id} {...question}/>;
    case 'multi-choice':
      return <MultiChoice key={question.id} {...question}/>;
    case 'choice':
      return <Choice  key={question.id} {...question}/>;
    default:
      console.log('broken');
      return;
  }
}


class FormComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.formComponent}>
        <div className={styles.question}>
          {surveyPageReducer()}
        </div>
      </div>
    );
  }
}

export default FormComponent;
