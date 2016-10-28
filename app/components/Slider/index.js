/**
*
* Slider
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import InputRange from 'react-input-range';

require("!style!css!react-input-range/dist/react-input-range.css");


class Slider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if(this.props.answer === undefined){
      this.props.onChange((this.props.range[0] + this.props.range[1])/2);
    }
  }

  removeTrailingZeroes(v){
    if (v.toString().split('').filter(c => c == '0').length > 8){
      return parseFloat(v.toString().slice(0, v.toString().length - 2));
    }else{
      return v;
    }
  }

  render() {
    return (
      <div className={styles.slider}>
        <div className={styles.questionText}>{this.props.question}</div>
        <InputRange
            maxValue={this.props.range[1]}
            minValue={this.props.range[0]}
            step={this.props.step || 1}
            formatLabel={this.removeTrailingZeroes}
            value={this.props.answer}
            onChange={(_,v) => this.props.onChange(v)}
            />
      </div>
    );
  }
}
Slider.propTypes = {
  onChange: React.PropTypes.func.isRequired
};

export default Slider;
