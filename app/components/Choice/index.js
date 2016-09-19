/**
*
* Choice
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class Choice extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.choice}>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

export default Choice;
