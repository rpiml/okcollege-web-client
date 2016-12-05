/**
*
* Choice
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

import { Radio } from 'antd';
const RadioGroup = Radio.Group;

require("!style!css!antd/lib/radio/style/index.css");

const Choice = (props) => {

  const onChange = (e) => {
    props.onChange(e.target.value)
  };

  return (
    <div className={styles.choice}>
      <div>{props.question}</div>
      <RadioGroup onChange={(e) => props.onChange(e.target.value)}
      value={props.answer} size="large">
        {props.answers.map(answer => {
          return <Radio key={answer} value={answer}>{answer}</Radio>;
        })}
      </RadioGroup>
      </div>
  );
}


export default Choice;
