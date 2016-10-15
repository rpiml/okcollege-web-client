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
  render() {
    return (
      <div className={styles.slider}>
        <div className={styles.questionText}>{this.props.question}</div>
        <InputRange
            maxValue={this.props.range[1]}
            minValue={this.props.range[0]}
            step={this.props.step || 1}
            value={this.props.answer || (this.props.range[0] + this.props.range[1])/2}
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
