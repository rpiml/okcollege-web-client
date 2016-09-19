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
    console.log(this.props)
    return (
      <div className={styles.slider}>
        <div>{this.props.question}</div>
        Slder here
      </div>
    );
  }
}

export default Slider;
