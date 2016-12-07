/**
 *
 * Slider
 *
 */

import React from 'react';
import { Slider as Slider_antd } from 'antd';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.css';

require("!style!css!antd/lib/slider/style/index.css");
require("!style!css!antd/lib/tooltip/style/index.css");


let removeTrailingZeroes = (v) => {
  if (v.toString().split('').filter(c => c == '0').length > 8){
    return parseFloat(v.toString().slice(0, v.toString().length - 2));
  } else {
    return v;
  }
}

const Slider = (props) => {

  let marks = {};
  marks[props.range[0]] = props.range[0].toString();
  marks[props.range[1]] = props.range[1].toString();

  const defaultValue = (props.range[0] + props.range[1])/2



  return (
    <div className={styles.slider}>
      <div className={styles.questionText}>{props.question}</div>
      <Slider_antd
        defaultValue={props.answer || defaultValue}
        marks={marks}
        max={props.range[1]}
        min={props.range[0]}
        step={props.step || 1}
        formatLabel={removeTrailingZeroes}
        onAfterChange={props.onChange}
      />
    </div>
  );
}

Slider.propTypes = {
  onChange: React.PropTypes.func.isRequired
};

export default Slider;
