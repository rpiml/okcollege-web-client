/**
*
* MultiChoice
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class CheckBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.checkboxText}>
        <Input type="checkbox" /> {this.props.answer}
      </div>
    )
  }
}

class MultiChoice extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.multiChoice}>
        <div>{this.props.question}</div>
        <FormGroup check>
          <Label check>
            {this.props.answers.map(answer => {
              return <CheckBox key={answer} answer={answer}/> ;
            })}
          </Label>
        </FormGroup>
      </div>
    );
  }
}

export default MultiChoice;
