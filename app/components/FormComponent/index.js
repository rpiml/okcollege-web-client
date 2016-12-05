/**
*
* FormComponent
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MultiChoice from 'components/MultiChoice';
import MultiChoiceDropdown from 'components/MultiChoiceDropdown';
import Choice from 'components/Choice';
import Slider from 'components/Slider';
import Dropdown from 'components/Dropdown';
import Search from 'components/Search';
import styles from './styles.css';
import {Button } from 'reactstrap';

const selectQuestionElement = (question) => {
  switch (question.type) {
    case 'slider':
      return Slider;
    case 'multi-choice':
      if(question.answers.length > 50){
        return Search;
      } else if(question.answers.length > 5){
        return Dropdown;
      } else{
        return MultiChoice;
      }
    case 'choice':
      if(question.answers.length > 50){
        return Search;
      } else if(question.answers.length > 5){
        return Dropdown;
      } else{
        return Choice;
      }
    case 'multi-choice-dropdown':
      return MultiChoiceDropdown;
  }
}


class FormComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    let onQuestionAnswer = this.props.onQuestionAnswer;
    let onSubmit = this.props.onSubmit;
    let survey = this.props.survey;

    let page = survey.pages.find(page => page.id == this.props.currentPage);
    let nextButton = page.next == "done" ? "Submit":"Next";

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
        <Button onClick={() => onSubmit()} className={styles.submitButton} size="lg" color="primary">{nextButton}</Button>
      </div>
    );
  }
}
FormComponent.propTypes = {
  survey: React.PropTypes.object.isRequired,
  onQuestionAnswer: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default FormComponent;
