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
      <div className={styles.checkboxContainer}>
          <Input
            type="checkbox"
            value={this.props.selected}
            onChange={() => {this.props.onChange()}}
          /> {this.props.answer}
      </div>
    )
  }
}


class MultiChoice extends React.Component { // eslint-disable-line react/prefer-stateless-function
  toggleAnswer(ans) {
    if(this.props.answer){
      let answers = this.props.answer
      return answers.includes(ans) ? answers.filter(a => a != ans): answers.concat(ans)
    }
    else{
      return [ans];
    }
  }

  render() {
    return (
      <div className={styles.multiChoice}>
        <Label check>
          {this.props.question}
        </Label>
        <FormGroup check>
            {this.props.answers.map(answer => {
              return <CheckBox
                        key={answer}
                        answer={answer}
                        selected={this.props.answer && this.props.answer.includes(answer)}
                        onChange={() => this.props.onChange(this.toggleAnswer(answer))}
                      />;
            })}
        </FormGroup>
      </div>
    );
  }
}

export default MultiChoice;
