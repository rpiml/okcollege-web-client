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
      <div>
        <Label check className={styles.checkboxText}>
          <Input
            type="checkbox"
            checked={this.props.selected}
            onChange={() => {this.props.onChange()}}
          /> {this.props.answer}
        </Label>
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
        <div>{this.props.question}</div>
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
