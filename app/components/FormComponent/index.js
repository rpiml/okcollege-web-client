//@flow
/**
 *
 * FormComponent
 *
 */
import React  from 'react'
import Choice  from 'components/Choice'
import MultiChoice  from 'components/MultiChoice'
import Search  from 'components/Search'
import Slider  from 'components/Slider'
import Text  from 'components/Text'
import { FormattedMessage } from 'react-intl'
import { Button } from 'reactstrap'
import messages  from './messages'
import styles  from './styles.css'

const selectQuestionElement = (question) => {
  switch (question.type) {
    case 'slider':
      return Slider;
    case 'multi-choice':
    case 'choice':
      if(question.answers.length > 10){
        return Search;
      } else {
        return question.type == 'choice' ? Choice : MultiChoice;
      }
    case 'text':
      return Text;
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
        <div className={styles.question}>
          <Question
            key={question.id}
            onChange={answer => onQuestionAnswer(question.id, answer)}
            answer={this.props.answer}
            {...question}
          />
          </div>
      );
    });

    return (
      <div className={styles.formComponent}>
        <div>
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
