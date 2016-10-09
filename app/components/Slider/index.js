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
            maxValue={10}
            minValue={0}
            value={this.props.answer || 5}
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
