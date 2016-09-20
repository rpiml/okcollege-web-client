/**
*
* Slider
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class Slider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.slider}>
        <div>{this.props.question}</div>
        <input type="range" id="myRange" min="0" max="8" step="1" />
        <div className={styles.sliderNumbers}>
          {[...Array(9).keys()].map(number => {
            console.log(number)
            return <div className={styles.number}>{number}</div>
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
