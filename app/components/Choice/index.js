/**
*
* Choice
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class RadioButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.choiceText}>
        <Input type="radio" name="radio"/> {this.props.answer}
      </div>
    )
  }
}

class Choice extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.choice}>
        <div>{this.props.question}</div>
        <FormGroup check>
          <Label check>
            {this.props.answers.map(answer => {
              return <RadioButton key={answer} answer={answer}/> ;
            })}
          </Label>
        </FormGroup>

      </div>
    );
  }
}

export default Choice;
