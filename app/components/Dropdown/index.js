/**
*
* Dropdown
*
*/

import React from 'react';
import styles from './styles.css';
import { Select } from 'antd';
const Option = Select.Option;

require("!style!css!antd/lib/select/style/index.css");


const Dropdown = (props) => {

  const answers = props.answers.map(answer =>{
    return (<Option key={answer}>{answer}</Option>)
  });

  const filter = (inputValue, option) => {
    return option.key.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
  }


  return (
    <div className={styles.dropdown}>
    <div>{props.question}</div>
      <Select
        multiple={props.type == "multi-choice"}
        dropdownMatchSelectWidth
        value={props.answer}
        placeholder={props.placeholder}
        onChange={props.onChange}
        tokenSeparators={[',']}
        filterOption = {filter}
        style={{ width: '100%' }}
        size="large"
      >
      {answers}
    </Select>
    </div>
  );
}

export default Dropdown;
