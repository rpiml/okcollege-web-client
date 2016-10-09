/**
*
* FormComponent
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MultiChoice from 'components/MultiChoice';
import Choice from 'components/Choice';
import Slider from 'components/Slider';
import styles from './styles.css';

const selectQuestionElement = (question) => {
  switch (question.type) {
    case 'slider':
      return Slider;
    case 'multi-choice':
      return MultiChoice;
    case 'choice':
      return Choice;
  }
}


class FormComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    let onQuestionAnswer = this.props.onQuestionAnswer;
    let survey = this.props.survey;

    let page = survey.pages.find(page => page.id == this.props.currentPage);

    let questionElements = page.questions.map(question => {
      let Question = selectQuestionElement(question);
      return (
        <Question
          key={question.id}
          onChange={answer => onQuestionAnswer(question.id, answer)}
          {...question}
          />
      );
    });

    return (
      <div className={styles.formComponent}>
        <div className={styles.question}>
          {questionElements}
        </div>
      </div>
    );
  }
}
FormComponent.propTypes = {
  survey: React.PropTypes.object.isRequired,
  onQuestionAnswer: React.PropTypes.func.isRequired
};

export default FormComponent;
